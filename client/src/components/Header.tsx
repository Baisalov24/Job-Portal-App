"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">Job Portal</Link>
      <nav className="flex items-center gap-4">
        <Link href="/findwork" className="px-4">Find Work</Link>
        {session && <Link href="/myjobs" className="px-4">My Jobs</Link>}
        <Link href="/post" className="px-4">Post a Job</Link>

        
        {session ? (
          <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">Logout</button>
        ) : (
          <button onClick={() => signIn("auth0")} className="bg-green-500 px-4 py-2 rounded">Login</button>
        )}
      </nav>
    </header>
  );
}
