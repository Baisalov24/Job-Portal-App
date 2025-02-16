"use client";
import { useState } from "react";

export default function Filters() {
  const [salary, setSalary] = useState(30000);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-72">
      <h2 className="text-lg font-semibold mb-4">Job Type</h2>
      <div className="space-y-2">
        {["Full Time", "Part Time", "Contract", "Internship"].map((type) => (
          <label key={type} className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-indigo-600" />
            <span>{type}</span>
          </label>
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-4">Tags</h2>
      <div className="space-y-2">
        {["FullStack", "Backend", "DevOps", "UI/UX"].map((tag) => (
          <label key={tag} className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-indigo-600" />
            <span>{tag}</span>
          </label>
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-4">Salary Range</h2>
      <input
        type="range"
        min="30000"
        max="200000"
        value={salary}
        onChange={(e) => setSalary(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-sm text-gray-700 mt-2">Minimum Salary: £{salary.toLocaleString()}</p>
    </div>
  );
}
