import express from "express";
const router = express.Router();

import Permission from "../models/Permission.js";

const grantPermission = async (req, res) => {
    try {
        const permission = new Permission(req.body);
        await permission.save();
        res.status(201).json(permission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updatePermissionById = async (req, res) => {
    try {
        const permission = await Permission.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, upsert: true }
        );
        res.json(permission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deletePermissionById = async (req, res) => {
    const id = req.params.id;
    try {
        const permission = await Permission.findByIdAndDelete(id);
        res.json(permission);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

router.post("/permissions", grantPermission);
router.put("/permissions/:id", updatePermissionById);
router.delete("/permissions/:id", deletePermissionById);

export default router;
