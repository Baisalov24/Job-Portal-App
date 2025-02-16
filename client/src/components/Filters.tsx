"use client";
import React from "react";

interface FiltersProps {
  selectedJobTypes: string[]; 
  onFilterChange: (jobTypes: string[]) => void;
}

export default function Filters({ selectedJobTypes = [], onFilterChange }: FiltersProps) {
  const handleCheckboxChange = (jobType: string) => {
    const updatedJobTypes = selectedJobTypes.includes(jobType)
      ? selectedJobTypes.filter((t) => t !== jobType)
      : [...selectedJobTypes, jobType];

    onFilterChange(updatedJobTypes);
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h3 className="font-semibold mb-2">Job Type</h3>
      {["Full Time", "Part Time", "Contract", "Internship"].map((type) => (
        <label key={type} className="block">
          <input
            type="checkbox"
            checked={selectedJobTypes?.includes(type)} 
            onChange={() => handleCheckboxChange(type)}
            className="mr-2"
          />
          {type}
        </label>
      ))}
    </div>
  );
}
