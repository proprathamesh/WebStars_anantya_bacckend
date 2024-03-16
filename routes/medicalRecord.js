import express from "express";
const router = express.Router();

import MedicalRecord from "../models/MedicalRecord.js";

const createMedicalRecord = async (req, res) => {
    try {
        const medicalRecord = new MedicalRecord(req.body);
        await medicalRecord.save();
        res.status(201).json(medicalRecord);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getMedicalRecords = async (req, res) => {
    try {
        const medicalRecords = await MedicalRecord.find();
        res.json(medicalRecords);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getMedicalRecordById = async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findById(req.params.id);
        if (!medicalRecord) {
            return res
                .status(404)
                .json({ message: "Medical record not found" });
        }
        res.json(medicalRecord);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateMedicalRecordById = async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!medicalRecord) {
            return res
                .status(404)
                .json({ message: "Medical record not found" });
        }
        res.json(medicalRecord);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteMedicalRecordById = async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findByIdAndDelete(
            req.params.id
        );
        if (!medicalRecord) {
            return res
                .status(404)
                .json({ message: "Medical record not found" });
        }
        res.json({ message: "Medical record deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

router.post("/medical-records", createMedicalRecord);
router.get("/medical-records", getMedicalRecords);
router.get("/medical-records/:id", getMedicalRecordById);
router.put("/medical-records/:id", updateMedicalRecordById);
router.delete("/medical-records/:id", deleteMedicalRecordById);

export default router;
