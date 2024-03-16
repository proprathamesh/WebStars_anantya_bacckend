import "dotenv/config";
import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();

import User from "../models/User.js";

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = jwt.sign({ user }, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });
        res.status(201).json({ message: "success", token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(401)
                .json({ message: "Invalid email or password" });
        }
        // Check if password is correct
        if (password !== user.password) {
            return res
                .status(401)
                .json({ message: "Invalid email or password" });
        }
        // Generate JWT token
        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        // Return token to client
        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

router.post("/users", createUser);
router.post("/login", loginUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deleteUserById);

export default router;
