import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

import DigitalPlanet from "./DigitalPlanet";
import GlitchText from "./GlitchText";

function Hero() {
  return (
    <section
      id="home"
      className="hero page-section"
    >
      {/* Background grid */}
      <div className="hero-grid"></div>

      {/* Digital planet */}
      <DigitalPlanet />

      {/* Decorative top label */}
      <motion.div
        className="hero-top-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span className="hero-label-line"></span>

        <span>SOFTWARE ENGINEER / FULL STACK DEVELOPER</span>

        <span className="hero-label-line"></span>
      </motion.div>

      {/* Large arrow */}
      <motion.div
        className="hero-arrow"
        initial={{
          opacity: 0,
          x: 30,
          y: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.8,
        }}
      >
        <ArrowDownRight
          size={105}
          strokeWidth={0.7}
        />
      </motion.div>

      {/* Main typography */}
      <div className="hero-content">

        <motion.div
          className="hero-small-title"
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
        >
          I AM A
        </motion.div>

        <h1 className="hero-title">

          <GlitchText
            color="cyan"
            className="hero-title-line hero-title-cyan"
          >
            FULL STACK
          </GlitchText>

          <GlitchText
            color="white"
            className="hero-title-line"
          >
            DEVELOPER
          </GlitchText>

        </h1>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
        >
          I build digital experiences
          <br />
          that solve{" "}
          <span>real problems.</span>
        </motion.p>

      </div>

      {/* Bottom information */}
      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
      >
        <div className="hero-scroll">
          <span className="scroll-dot"></span>

          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="hero-location">
          <span>BASED IN</span>

          <strong>INDIA</strong>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;