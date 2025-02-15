import React, { useEffect, useState } from "react";
import axios from "axios";

function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs")
      .then(response => setJobs(response.data))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsPage;
