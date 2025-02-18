import axios from "axios";
import { useState } from "react";

interface JobFormData {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
}

export default function JobForm() {
  const [formData, setFormData] = useState<JobFormData>({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      
      const response = await axios.post(
        "http://localhost:5000/api/jobs", 
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

  
      if (response.status === 201) {
        alert("Job posted successfully!");
        setFormData({
          title: "",
          description: "",
          company: "",
          location: "",
          salary: "",
        });
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert(`Error: ${error.response?.data?.message || "Server error"}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-6">
      
      <input
        type="text"
        placeholder="Job Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border p-2 w-full"
        required
      />
      
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Post Job
      </button>
    </form>
  );
}