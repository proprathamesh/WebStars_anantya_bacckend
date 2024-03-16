import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    medicalRecordId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord",
        required: true,
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    document: {
        type: String,
        required: true,
    },
});

const Document = mongoose.model("Document", documentSchema);

export default Document;
