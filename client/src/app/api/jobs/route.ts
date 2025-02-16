import { NextResponse } from "next/server";

const jobs = [
  {
    id: "1",
    title: "Project Manager",
    company: "TheCodeDealer",
    location: "Remote",
    salary: "£450,000.00/pa",
    jobType: "Full Time",
  },
  {
    id: "2",
    title: "Product Engineer",
    company: "TheCodeDealer",
    location: "London, UK",
    salary: "£100,000.00/pa",
    jobType: "Full Time",
  },
  {
    id: "3",
    title: "Git/GitHub Specialist",
    company: "Walter Fox",
    location: "Berlin, Germany",
    salary: "£1,200.00/ph",
    jobType: "Contract",
  },
  {
    id: "4",
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Paris, France",
    salary: "£90,000.00/pa",
    jobType: "Full Time",
  },
];

export async function GET() {
  return NextResponse.json(jobs);
}
