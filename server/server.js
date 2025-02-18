import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connect.js";
import applicationRoutes from "./routes/applicationRoutes.js"
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();
const app = express();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

connectDB();

// Исправленные CORS-настройки
app.use(cors({
  origin: "http://localhost:3000", // URL вашего React-приложения
  methods: ["GET", "POST"]
}));

app.use(express.json());
app.use("/api/applications", applicationRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
