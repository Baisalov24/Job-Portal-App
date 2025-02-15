import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      {children}
    </div>
  );
}
