"use client";
import JobForm from "components/JobPost/JobForm";

export default function PostJobPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
      <JobForm />
    </div>
  );
}
