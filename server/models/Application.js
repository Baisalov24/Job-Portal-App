import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  userId: { type: String, required: true }, 
  appliedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model("Application", applicationSchema);
export default Application;
