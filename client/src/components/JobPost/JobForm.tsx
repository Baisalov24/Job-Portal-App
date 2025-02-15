"use client";  
import React, { useState } from "react";

export default function JobForm() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job posted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="title" placeholder="Job Title" onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="company" placeholder="Company" onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post Job</button>
    </form>
  );
}
