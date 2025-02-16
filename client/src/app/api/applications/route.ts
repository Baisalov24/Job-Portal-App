import { NextResponse } from "next/server";

let applications: any[] = []; 

export async function POST(req: Request) {
  try {
    const { name, email, resume, message, jobTitle } = await req.json();

    if (!name || !email || !resume) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newApplication = {
      id: applications.length + 1,
      name,
      email,
      resume,
      message,
      jobTitle,
      date: new Date().toISOString(),
    };

    applications.push(newApplication);

    return NextResponse.json({ message: "Application submitted successfully!", application: newApplication });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
