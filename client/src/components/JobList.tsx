"use client";
import React from "react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
}

export default function JobList({ jobs }: { jobs: Job[] }) {
  if (!jobs.length) return <p>No jobs found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div key={job.id} className="p-4 border rounded-lg shadow">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-600">{job.company} - {job.location}</p>
          <p className="text-green-600 font-bold">{job.salary}</p>
          <span className="bg-gray-200 px-2 py-1 rounded">{job.jobType}</span>
        </div>
      ))}
    </div>
  );
}
