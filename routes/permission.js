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
        const permission = await Permission.findOneAndUpdate(
            {
                medicalRecordId: req.body.medicalRecordId,
                doctorId: req.body.doctorId,
            },
            { type: req.body.type },
            { new: true, upsert: true }
        );
        res.json(permission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deletePermissionById = async (req, res) => {
    try {
        const permission = await Permission.findOneAndDelete({
            medicalRecordId: req.body.medicalRecordId,
            doctorId: req.body.doctorId,
        });
        res.json({ message: "Permission deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

router.post("/permissions", grantPermission);
router.put("/permissions", updatePermissionById);
router.delete("/permissions", deletePermissionById);

export default router;
