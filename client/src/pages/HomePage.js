import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Job Portal</h1>
      <Link to="/jobs">View Jobs</Link>
    </div>
  );
}

export default HomePage;
