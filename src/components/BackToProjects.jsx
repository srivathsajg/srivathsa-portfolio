import { Link } from "react-router-dom";

function BackToProjects() {
  return (
    <Link
      to="/#work"
      className="back-to-projects"
    >
      ← BACK TO PROJECTS
    </Link>
  );
}

export default BackToProjects;