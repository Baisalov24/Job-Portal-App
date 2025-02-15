"use client";
import React, { useState } from "react";
import JobCard from "@/components/JobItem/JobCard";
import SearchForm from "@/components/SearchForm";

const dummyJobs = [
  { title: "Frontend Developer", company: "TechCorp", location: "Remote" },
  { title: "Backend Developer", company: "DataSoft", location: "New York" },
  { title: "Fullstack Engineer", company: "WebWorks", location: "San Francisco" },
];

export default function FindWorkPage() {
  const [filteredJobs, setFilteredJobs] = useState(dummyJobs);

  const handleSearch = (query: string) => {
    const results = dummyJobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(results);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Find Work</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="grid gap-4">
        {filteredJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}
