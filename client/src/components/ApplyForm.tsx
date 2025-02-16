"use client";
import React, { useState } from "react";

interface ApplyFormProps {
  jobTitle: string;
}

export default function ApplyForm({ jobTitle }: ApplyFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", { name, email, resume, message });
    alert("Application submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Apply for {jobTitle}</h2>
      
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      
      <input 
        type="email" 
        placeholder="Your Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />

      <input 
        type="file" 
        onChange={(e) => setResume(e.target.files?.[0] || null)}
        className="border p-2 w-full mb-2"
        required
      />

      <textarea
        placeholder="Cover Letter (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <button 
        type="submit" 
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Submit Application
      </button>
    </form>
  );
}
