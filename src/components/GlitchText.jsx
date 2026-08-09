import { motion } from "framer-motion";

function GlitchText({
  children,
  className = "",
  color = "white",
}) {
  return (
    <motion.span
      className={`glitch-text glitch-${color} ${className}`}
      data-text={children}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.span>
  );
}

export default GlitchText;