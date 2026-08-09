import { motion } from "framer-motion";

const technologies = [
  "JAVASCRIPT",
  "REACT",
  "NODE.JS",
  "EXPRESS",
  "MONGODB",
  "PYTHON",
  "C++",
  "TAILWIND",
  "GIT",
];

function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="about-container">

        {/* LEFT SIDE */}
        <motion.div
          className="about-content"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="about-label">
            <span></span>
            ABOUT ME
          </div>

          <h2 className="about-title">
            WHO I AM
          </h2>

          <div className="about-text">

            <p>
              I'm{" "}
              <span className="about-highlight">
                Srivathsa JG
              </span>
              , a Computer Science student and a
              passionate developer who loves building
              scalable web applications and exploring
              new technologies.
            </p>

            <p>
              I focus on creating clean, efficient
              and user-friendly{" "}
              <span className="about-red">
                digital solutions.
              </span>
            </p>

          </div>

          <div className="about-tech">
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </motion.div>


        {/* RIGHT SIDE — YOUR PHOTO */}
        <motion.div
          className="about-visual"
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          {/* Technical grid */}
          <div className="about-grid"></div>

          {/* Your photo */}
          <div className="about-photo-wrapper">
            <img
              src="/assets/PSri.jpeg"
              alt="Srivathsa JG"
              className="about-photo"
            />
          </div>

          {/* Blue glitch bars */}
          <div className="about-blue blue-one"></div>

          <div className="about-blue blue-two"></div>

          {/* Scan lines */}
          <div className="about-scan scan-one"></div>

          <div className="about-scan scan-two"></div>

          <div className="about-scan scan-three"></div>

          {/* Crosshair */}
          <div className="about-crosshair">
            +
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;