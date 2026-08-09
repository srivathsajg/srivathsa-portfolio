import { motion } from "framer-motion";
import experience from "../data/experience";



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
          }}
        >
          EXPERIENCE
        </motion.div>

        <motion.h2
          className="experience-title"
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
          JOURNEY SO FAR
        </motion.h2>

      </div>

      <div className="experience-content">

        <div className="experience-timeline">

          <div className="timeline-line"></div>

          {experience.map((item, index) => (
            <motion.div
              key={item.year}
              className={`experience-item experience-${item.color}`}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
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

                <h3>
                  {item.role}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

              <div className="experience-number">
                0{index + 1}
              </div>

            </motion.div>
          ))}

        </div>

        <div className="experience-visual">

          <div className="experience-tunnel">

            <div className="tunnel-grid"></div>

            <div className="tunnel-frame tunnel-frame-1"></div>

            <div className="tunnel-frame tunnel-frame-2"></div>

            <div className="tunnel-frame tunnel-frame-3"></div>

            <div className="tunnel-frame tunnel-frame-4"></div>

            <div className="tunnel-person">

              <div className="person-head"></div>

              <div className="person-body"></div>

            </div>

            <div className="tunnel-crosshair">
              +
            </div>

            <div className="tunnel-label">
              SYSTEM / EXPERIENCE
            </div>

          </div>

        </div>

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