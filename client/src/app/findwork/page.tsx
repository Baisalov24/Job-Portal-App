"use client";
import SearchForm from "@/components/SearchForm";
import Filters from "@/components/Filters";
import JobList from "@/components/JobList";

export default function FindWork() {
  return (
    <div className="container mx-auto p-6"> 
      <SearchForm onSearch={(query) => console.log("Searching:", query)} />
      
      <div className="flex space-x-6">
        <div className="w-1/4">
          <Filters />
        </div>

        <div className="w-3/4">
          <JobList />
        </div>
      </div>
    </div>
  );
}
