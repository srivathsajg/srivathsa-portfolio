import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experience = [
  {
    year: "2025 - PRESENT",
    role: "Full Stack Developer",
    description:
      "Building modern web applications and scalable digital systems.",
    color: "red",
  },
  {
    year: "2024 - 2025",
    role: "Backend Developer",
    description:
      "Developed REST APIs, backend services and database-driven applications.",
    color: "cyan",
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    description:
      "Created responsive and interactive user interfaces with modern web technologies.",
    color: "green",
  },
];

function TunnelGraphic() {
  return (
    <div className="experience-tunnel">
      <div className="tunnel-grid"></div>

      <div className="tunnel-frame tunnel-frame-1"></div>
      <div className="tunnel-frame tunnel-frame-2"></div>
      <div className="tunnel-frame tunnel-frame-3"></div>
      <div className="tunnel-frame tunnel-frame-4"></div>
      <div className="tunnel-frame tunnel-frame-5"></div>

      <div className="tunnel-floor"></div>

      <div className="tunnel-person">
        <div className="person-head"></div>
        <div className="person-body"></div>
      </div>

      <div className="tunnel-scan tunnel-scan-1"></div>
      <div className="tunnel-scan tunnel-scan-2"></div>
      <div className="tunnel-scan tunnel-scan-3"></div>

      <div className="tunnel-crosshair">
        +
      </div>

      <div className="tunnel-label">
        SYSTEM / EXPERIENCE
      </div>

      <div className="tunnel-arrow">
        <ArrowUpRight
          size={38}
          strokeWidth={0.8}
        />
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="experience-section page-section"
    >
      <div className="experience-header">
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
          EXPERIENCE
        </motion.div>

        <motion.h2
          className="experience-title"
          initial={{
            opacity: 0,
            y: 40,
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
          JOURNEY SO FAR
        </motion.h2>
      </div>

      <div className="experience-content">

        {/* Timeline */}
        <div className="experience-timeline">
          <div className="timeline-line"></div>

          {experience.map((item, index) => (
            <motion.div
              className={`experience-item experience-${item.color}`}
              key={item.year}
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="timeline-marker">
                <span></span>
              </div>

              <div className="experience-year">
                {item.year}
              </div>

              <div className="experience-details">
                <h3>{item.role}</h3>

                <p>{item.description}</p>
              </div>

              <div className="experience-number">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tunnel */}
        <motion.div
          className="experience-visual"
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
        >
          <TunnelGraphic />
        </motion.div>
      </div>

      <div className="experience-footer">
        <span>CAREER_LOG</span>

        <span className="experience-footer-line"></span>

        <span>BUILDING THE FUTURE</span>
      </div>
    </section>
  );
}

export default Experience;