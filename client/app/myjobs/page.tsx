"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Application {
  _id: string;
  jobTitle: string;
  jobId: string;
  date: string;
  company: string;
  location: string;
  salary: string;
}

export default function MyJobsPage() {
  const { data: session } = useSession();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      if (!session?.user?.id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/api/applications/${session.user.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }

        const data = await response.json();
        setApplications(data);
      } catch (err) {
        setError("Error loading applications. Try refreshing the page.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [session]);

  if (!session) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Job Applications</h1>
        <p className="text-red-500">Please log in to view your applications.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Job Applications</h1>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Job Applications</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Job Applications</h1>

      {applications.length === 0 ? (
        <p className="text-gray-500">You haven't applied to any jobs yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app._id}
              className="border p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg mb-2 text-blue-600">{app.jobTitle}</h3>
              <div className="space-y-1 text-gray-700">
                <p><span className="font-semibold">Company:</span> {app.company}</p>
                <p><span className="font-semibold">Location:</span> {app.location}</p>
                <p><span className="font-semibold">Salary:</span> {app.salary}</p>
                <p><span className="font-semibold">Applied:</span> {new Date(app.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
