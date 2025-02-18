"use client";
import React, { useEffect, useState } from "react";
import SearchForm from "components/SearchForm";
import Filters from "components/Filters";
import JobList from "components/JobList";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
}

export default function FindWork() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
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

  const filterJobs = () => {
    let filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
        (selectedJobTypes.length === 0 || selectedJobTypes.includes(job.jobType))
    );

    setFilteredJobs(filtered);
  };

  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
  };

  const handleFilterChange = (jobTypes: string[]) => {
    setSelectedJobTypes(jobTypes);
  };

  useEffect(() => {
    filterJobs();
  }, [searchQuery, searchLocation, selectedJobTypes, jobs]);

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div className="container mx-auto p-6 flex space-x-6">
      <div className="w-1/4">
        <Filters selectedJobTypes={selectedJobTypes} onFilterChange={handleFilterChange} />
      </div>

      <div className="w-3/4">
        <SearchForm onSearch={handleSearch} />
        <JobList jobs={filteredJobs} />
      </div>
    </div>
  );
}
