"use client";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">Job Portal</Link>
      <nav>
        <Link href="/findwork" className="px-4">Find Work</Link>
        <Link href="/myjobs" className="px-4">My Jobs</Link>
        <Link href="/post" className="px-4">Post a Job</Link>
      </nav>
    </header>
  );
}
