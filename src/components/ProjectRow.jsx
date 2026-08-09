import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function ProjectRow({ project, index }) {
  return (
    <motion.div
      className="project-row"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
    >
      <div className="project-number">
        {project.number}
      </div>

      <div className="project-main">
        <h3>
          {project.title}
        </h3>

        <span>
          {project.technologies}
        </span>
      </div>

      <div className="project-category">
        {project.category}
      </div>

      <div className="project-arrow">
        <ArrowUpRight
          size={20}
          strokeWidth={1}
        />
      </div>
    </motion.div>
  );
}

export default ProjectRow;