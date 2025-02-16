"use client";
import React, { useState } from "react";

export default function Filters() {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="p-4 border rounded-lg shadow">
      <h3 className="font-semibold mb-2">Job Type</h3>
      <div>
        {["Full Time", "Part Time", "Contract", "Internship"].map((type) => (
          <label key={type} className="block">
            <input
              type="radio"
              value={type}
              checked={selectedType === type}
              onChange={(e) => setSelectedType(e.target.value)}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
}
