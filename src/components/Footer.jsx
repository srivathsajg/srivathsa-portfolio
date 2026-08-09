import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">

      {/* Top footer */}
      <div className="footer-main">

        {/* Brand */}
        <motion.div
          className="footer-brand"
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
            duration: 0.6,
          }}
        >
          <div className="footer-logo">
            SJ<span>.</span>
          </div>

          <p>
            SOFTWARE ENGINEER
            <br />
            FULL STACK DEVELOPER
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="footer-navigation">

          <span className="footer-heading">
            NAVIGATION
          </span>

          <a href="#home">
            HOME
            <ArrowUpRight size={12} />
          </a>

          <a href="#about">
            ABOUT
            <ArrowUpRight size={12} />
          </a>

          <a href="#work">
            WORK
            <ArrowUpRight size={12} />
          </a>

          <a href="#skills">
            SKILLS
            <ArrowUpRight size={12} />
          </a>

          <a href="#experience">
            EXPERIENCE
            <ArrowUpRight size={12} />
          </a>

          <a href="#contact">
            CONTACT
            <ArrowUpRight size={12} />
          </a>

        </div>

        {/* Social */}
        <div className="footer-social">

          <span className="footer-heading">
            CONNECT
          </span>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <ArrowUpRight size={12} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
            <ArrowUpRight size={12} />
          </a>

          <a href="mailto:srivathsa.jg@gmail.com">
            EMAIL
            <ArrowUpRight size={12} />
          </a>

        </div>

        {/* Status */}
        <div className="footer-status">

          <span className="footer-heading">
            STATUS
          </span>

          <div className="footer-status-indicator">
            <span></span>

            AVAILABLE FOR WORK
          </div>

          <p>
            Open to internships,
            collaborations and
            interesting projects.
          </p>

        </div>

      </div>

      {/* Huge typography */}
      <motion.div
        className="footer-big-text"
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
        }}
        transition={{
          duration: 0.8,
        }}
      >
        SRIVATHSA
      </motion.div>

      {/* Bottom */}
      <div className="footer-bottom">

        <span>
          © {currentYear} SRIVATHSA JG
        </span>

        <span>
          ALL RIGHTS RESERVED
        </span>

        <span>
          DESIGNED & BUILT WITH CODE
        </span>

      </div>

    </footer>
  );
}

export default Footer;