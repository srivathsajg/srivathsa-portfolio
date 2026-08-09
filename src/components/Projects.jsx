import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "SMART BANKING SYSTEM",
    description: "Full Stack Development",
  },
  {
    number: "02",
    title: "BLOCKCHAIN HEALTHCARE",
    description: "MERN Stack + Blockchain",
  },
  {
    number: "03",
    title: "RESQONE",
    description: "Spring Boot Application",
  },
  {
    number: "04",
    title: "JARVIS AI ASSISTANT",
    description: "Python + AI/ML",
  },
  {
    number: "05",
    title: "PERSONAL PORTFOLIO",
    description: "React + Motion Design",
  },
];

function Projects() {
  return (
    <section id="work" className="projects-section">

      {/* LEFT CONTENT */}
      <div className="projects-content">

        <div className="projects-label">
          <span></span>
          SELECTED WORK
        </div>

        <h2 className="projects-title">
          FEATURED PROJECTS
        </h2>

        <div className="projects-list">

          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="project-row"
              initial={{
                opacity: 0,
                y: 15,
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
                duration: 0.4,
                delay: index * 0.06,
              }}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-info">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>

              <div className="project-arrow">
                ↗
              </div>

            </motion.div>
          ))}

        </div>

      </div>


      {/* RIGHT GLITCH VISUAL */}
      <div className="projects-visual">

        <div className="projects-grid"></div>

        <div className="glitch-core">

          <div className="glitch-line line-1"></div>
          <div className="glitch-line line-2"></div>
          <div className="glitch-line line-3"></div>
          <div className="glitch-line line-4"></div>
          <div className="glitch-line line-5"></div>
          <div className="glitch-line line-6"></div>
          <div className="glitch-line line-7"></div>
          <div className="glitch-line line-8"></div>
          <div className="glitch-line line-9"></div>
          <div className="glitch-line line-10"></div>
          <div className="glitch-line line-11"></div>
          <div className="glitch-line line-12"></div>
          <div className="glitch-line line-13"></div>
          <div className="glitch-line line-14"></div>
          <div className="glitch-line line-15"></div>

        </div>

        <div className="projects-future">
          THE FUTURE
        </div>

      </div>

    </section>
  );
}

export default Projects;