import React from "react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
}

export default function JobCard({ title, company, location }: JobCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{company} - {location}</p>
    </div>
  );
}
