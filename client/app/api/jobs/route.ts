import { NextResponse } from "next/server";

const jobs = [
  { id: "1", title: "Frontend Developer", company: "TechCorp", location: "Remote", salary: "£80,000", jobType: "Full Time", description: "Develop and maintain web applications." },
  { id: "2", title: "Backend Developer", company: "DataSoft", location: "New York", salary: "£100,000", jobType: "Full Time", description: "Work with databases and APIs." },
  { id: "3", title: "UI/UX Designer", company: "DesignPro", location: "San Francisco", salary: "£90,000", jobType: "Contract", description: "Create beautiful UI designs." }
];

export async function GET() {
  return NextResponse.json(jobs);
}
  