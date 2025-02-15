"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
      <p>&copy; {new Date().getFullYear()} Job Portal. All rights reserved.</p>
    </footer>
  );
}
