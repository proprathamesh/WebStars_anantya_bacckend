import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    dateOfVisit: {
        type: Date,
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    },
    treatment: {
        type: String,
        required: true,
    },
    medication: {
        type: String,
        required: true,
    },
    otherInfo: {
        type: String,
    },
    status: {
        type: String,
        enum: ["pending", "done", "rejected", "undone"],
        default: "undone",
    },
});

const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

export default MedicalRecord;
