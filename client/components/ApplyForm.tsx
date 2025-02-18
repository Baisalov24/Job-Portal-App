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
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !resume) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);
    formData.append("message", message);
    formData.append("jobTitle", jobTitle);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          resume: resume.name,
          message,
          jobTitle,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Application submitted successfully!");
        setName("");
        setEmail("");
        setResume(null);
        setMessage("");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      alert("Error submitting application");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Apply for {jobTitle}</h2>

      {successMessage && <p className="text-green-600">{successMessage}</p>}

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
        className={`bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
