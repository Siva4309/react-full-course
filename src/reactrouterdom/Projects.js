import React from "react";
import { Link, Outlet } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <nav>
        <Link style={{ color: "black" }} to="/projects/featured">
          Featured Projects
        </Link>
        <Link style={{ color: "black" }} to="/projects/new">
          New Projects
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Projects;
