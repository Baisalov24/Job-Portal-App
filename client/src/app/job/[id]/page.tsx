"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ApplyForm from "@/components/ApplyForm";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  description: string;
}

export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!job) return <p>Job not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="text-green-600 font-bold">{job.salary}</p>
      <span className="bg-gray-200 px-2 py-1 rounded">{job.jobType}</span>
      <p className="mt-4">{job.description}</p>

      <button 
        onClick={() => setShowForm(true)}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Apply Now
      </button>

      {showForm && <ApplyForm jobTitle={job.title} />}
    </div>
  );
}
