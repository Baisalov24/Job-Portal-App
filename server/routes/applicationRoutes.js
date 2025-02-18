const express = require("express");
const Application = require("../models/Application");
const Job = require("../models/Job");

const router = express.Router();


router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const applications = await Application.find({ userId }).populate("jobId");

    res.json(
      applications.map((app) => ({
        _id: app._id,
        jobTitle: app.jobId?.title || "Unknown",
        jobId: app.jobId?._id || "N/A",
        date: app.appliedAt,
        company: app.jobId?.company || "Unknown",
        location: app.jobId?.location || "Unknown",
        salary: app.jobId?.salary ? `£${app.jobId.salary.toLocaleString()}` : "N/A",
      }))
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
