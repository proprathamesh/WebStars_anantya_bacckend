import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Import the routers
import userRoutes from "./routes/user.js";
import medicalRecordRoutes from "./routes/medicalRecord.js";
import documentRoutes from "./routes/document.js";
import permissionRoutes from "./routes/permission.js";

const app = express();
const port = 3000;
mongoose.connect(process.env.CONNECTION_URL);
// mongoose.connect("mongodb://127.0.0.1:27017/AlphaByte");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the routers
app.use("/api", userRoutes);
app.use("/api", medicalRecordRoutes);
app.use("/api", documentRoutes);
app.use("/api", permissionRoutes);

app.get("/", async (req, res) => {
    return res.send("<h1>Hello Alphabyte</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
