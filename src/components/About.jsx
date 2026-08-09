import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section page-section">
      {/* Section heading */}
      <div className="about-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.div>

        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          WHO I AM
        </motion.h2>
      </div>

      {/* Main description */}
      <motion.div
        className="about-description"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          delay: 0.2,
        }}
      >
        <p>
          I'm{" "}
          <span className="about-highlight">
            Srivathsa JG
          </span>
          , a Computer Science student and passionate
          developer focused on building scalable digital
          experiences and intelligent applications.
        </p>

        <p>
          I enjoy working across{" "}
          <span className="about-red">
            frontend
          </span>
          ,{" "}
          <span className="about-cyan">
            backend
          </span>
          , AI/ML and emerging technologies to turn ideas
          into meaningful digital solutions.
        </p>
      </motion.div>

      {/* Digital portrait */}
      <motion.div
        className="about-portrait"
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
          delay: 0.15,
        }}
      >
        <div className="portrait-grid"></div>

        <div className="portrait-scanlines"></div>

        <div className="portrait-frame">
          <div className="portrait-placeholder">
            <div className="portrait-head"></div>

            <div className="portrait-body"></div>
          </div>
        </div>

        <div className="portrait-glitch portrait-glitch-1"></div>
        <div className="portrait-glitch portrait-glitch-2"></div>
        <div className="portrait-glitch portrait-glitch-3"></div>

        <div className="portrait-label portrait-label-left">
          DIGITAL ID / 001
        </div>

        <div className="portrait-label portrait-label-right">
          SIGNAL ACTIVE
        </div>

        <div className="portrait-crosshair portrait-crosshair-1">
          +
        </div>

        <div className="portrait-crosshair portrait-crosshair-2">
          +
        </div>
      </motion.div>

      {/* Information strip */}
      <motion.div
        className="about-info"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
      >
        <div className="about-info-item">
          <span>BASED IN</span>
          <strong>INDIA</strong>
        </div>

        <div className="about-info-item">
          <span>FOCUS</span>
          <strong>FULL STACK / AI</strong>
        </div>

        <div className="about-info-item">
          <span>CURRENTLY</span>
          <strong>BUILDING</strong>
        </div>

        <div className="about-info-item">
          <span>STATUS</span>
          <strong className="status-active">
            AVAILABLE
          </strong>
        </div>
      </motion.div>
    </section>
  );
}

export default About;