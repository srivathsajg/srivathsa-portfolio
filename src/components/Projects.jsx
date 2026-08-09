import { motion } from "framer-motion";
import ProjectRow from "./ProjectRow";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="work"
      className="projects-section page-section"
    >
      <div className="projects-header">

        <motion.div
          className="section-label"
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          SELECTED WORK
        </motion.div>

        <motion.h2
          className="projects-title"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          FEATURED PROJECTS
        </motion.h2>

      </div>

      <div className="projects-list">

        {projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
          />
        ))}

      </div>

      <div className="projects-footer">

        <span>
          PROJECTS / {String(projects.length).padStart(2, "0")}
        </span>

        <span className="projects-footer-line"></span>

        <span>
          SELECTED SYSTEMS
        </span>

      </div>
    </section>
  );
}

export default Projects;