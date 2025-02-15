"use client";
import React, { useState } from "react";

export default function SearchForm({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        placeholder="Search jobs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 flex-grow"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Search</button>
    </form>
  );
}
