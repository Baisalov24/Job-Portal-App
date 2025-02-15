"use client";
import React, { useState, useEffect } from "react";
import JobCard from "@/components/JobItem/JobCard";
import SearchForm from "@/components/SearchForm";
import axios from "axios";

export default function FindWorkPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs")
      .then((response) => {
        setJobs(response.data);
        setFilteredJobs(response.data);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleSearch = (query: string) => {
    const results = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(results);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Find Work</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="grid gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job._id} {...job} />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}
