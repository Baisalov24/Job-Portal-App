"use client";
import React, { useEffect, useState } from "react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
}

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query: string, location: string) => {
    let filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );

    setFilteredJobs(filtered);
  };

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="p-4 border rounded-lg shadow">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-green-600 font-bold">{job.salary}</p>
            <span className="bg-gray-200 px-2 py-1 rounded">{job.jobType}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
