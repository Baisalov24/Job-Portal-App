import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String },
});

const Job = mongoose.model("Job", JobSchema);

export default Job;
