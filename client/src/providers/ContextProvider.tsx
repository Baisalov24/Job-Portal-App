"use client";
import React from "react";
import { GlobalContextProvider } from "@/context/globalContext";
import { JobsContextProvider } from "@/context/jobsContext";

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <GlobalContextProvider>
      <JobsContextProvider>{children}</JobsContextProvider>
    </GlobalContextProvider>
  );
}
