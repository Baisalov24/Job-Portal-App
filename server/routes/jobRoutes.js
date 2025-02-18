import express from "express";
import Job from "../models/JobModel.js"; // ✅ Проверяем путь

const router = express.Router();

// 📌 POST /api/jobs — Создать вакансию
router.post("/", async (req, res) => {
  try {
    console.log("Received job data:", req.body); // ✅ Лог перед сохранением

    const { title, description, company, location, salary } = req.body;

    if (!title || !company || !location) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newJob = new Job({
      title,
      description,
      company,
      location,
      salary,
    });

    await newJob.save();
    console.log("Job saved to MongoDB:", newJob); // ✅ Лог успешного сохранения

    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error saving job:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
