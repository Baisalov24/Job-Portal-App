"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const JobsContext = createContext(null);

export const JobsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs").then((response) => setJobs(response.data));
  }, []);

  return (
    <JobsContext.Provider value={{ jobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobsContext = () => useContext(JobsContext);
