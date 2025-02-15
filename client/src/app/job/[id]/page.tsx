"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/api/jobs/${id}`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-700">{job.company} - {job.location}</p>
      <p className="mt-4">{job.description}</p>
    </div>
  );
}
