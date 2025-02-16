"use client";
import React, { useState } from "react";

interface SearchFormProps {
  onSearch: (query: string, location: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Job Title or Keywords"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 flex-grow"
      />
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 flex-grow"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Search</button>
    </form>
  );
}
