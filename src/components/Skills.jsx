import { motion } from "framer-motion";
import skills from "../data/skills";


function Skills() {
  return (
    <section
      id="skills"
      className="skills-section page-section"
    >
      <div className="skills-background-grid"></div>

      <div className="skills-header">

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
          CAPABILITIES
        </motion.div>

        <motion.h2
          className="skills-title"
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
          TOOLS I BUILD WITH
        </motion.h2>

      </div>

      <div className="skills-cloud">

        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`skill-item skill-${skill.color}`}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.04,
            }}
          >
            {skill.name}
          </motion.div>
        ))}

      </div>

      <div className="skills-bottom">
        <span>STACK / 012</span>

        <span className="skills-bottom-line"></span>

        <span>CONTINUOUSLY EVOLVING</span>
      </div>

    </section>
  );
}

export default Skills;