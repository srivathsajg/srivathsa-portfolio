import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function ProjectRow({ project, index, onHover }) {
  return (
    <motion.div
      className="project-row"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
      }}
    >
      <div className="project-number">
        {project.number}
      </div>

      <div className="project-main">
        <h3 className="project-title">
          {project.title}
        </h3>

        <div className="project-meta">
          <span>{project.category}</span>

          <span className="project-separator">
            /
          </span>

          <span>{project.technologies}</span>
        </div>
      </div>

      <motion.div
        className="project-arrow"
        whileHover={{
          x: 6,
          y: -6,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <ArrowUpRight
          size={25}
          strokeWidth={1}
        />
      </motion.div>

      <div className="project-index">
        PROJECT_{project.number}
      </div>
    </motion.div>
  );
}

export default ProjectRow;