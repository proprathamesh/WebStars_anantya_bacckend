import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
    medicalRecordId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord",
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        enum: ["read", "write"],
        required: true,
    },
    token: {
        type: String,
    },
});

const Permission = mongoose.model("Permission", permissionSchema);

export default Permission;
