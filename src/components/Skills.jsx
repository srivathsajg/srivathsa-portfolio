import { motion } from "framer-motion";

const skills = [
  {
    name: "JAVA",
    color: "white",
  },
  {
    name: "REACT",
    color: "cyan",
  },
  {
    name: "PYTHON",
    color: "white",
  },
  {
    name: "NODE.JS",
    color: "white",
  },
  {
    name: "SPRING BOOT",
    color: "white",
  },
  {
    name: "MONGODB",
    color: "green",
  },
  {
    name: "MYSQL",
    color: "white",
  },
  {
    name: "GIT",
    color: "white",
  },
  {
    name: "AI / ML",
    color: "cyan",
  },
  {
    name: "BLOCKCHAIN",
    color: "red",
  },
  {
    name: "TAILWIND",
    color: "white",
  },
  {
    name: "EXPRESS",
    color: "white",
  },
];

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          CAPABILITIES
        </motion.div>

        <motion.h2
          className="skills-title"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
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
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
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