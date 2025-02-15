"use client";
import React, { useState } from "react";
import axios from "axios";

export default function JobForm() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/jobs", formData);
      alert("Job posted successfully!");
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="title" placeholder="Job Title" onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="company" placeholder="Company" onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} className="border p-2 w-full" />
      <textarea name="description" placeholder="Job Description" onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post Job</button>
    </form>
  );
}
