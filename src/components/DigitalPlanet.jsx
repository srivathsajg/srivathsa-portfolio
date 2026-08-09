import { motion } from "framer-motion";

function DigitalPlanet() {
  return (
    <motion.div
      className="digital-planet"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="planet-noise"></div>

      <div className="planet-lines"></div>

      <div className="planet-glitch planet-glitch-one"></div>

      <div className="planet-glitch planet-glitch-two"></div>

      <div className="planet-glow"></div>
    </motion.div>
  );
}

export default DigitalPlanet;