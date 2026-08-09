import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function RGBRing() {
  return (
    <div className="rgb-ring-container">
      <div className="rgb-ring rgb-ring-green"></div>

      <div className="rgb-ring rgb-ring-blue"></div>

      <div className="rgb-ring rgb-ring-red"></div>

      <div className="rgb-ring-noise"></div>

      <div className="rgb-ring-crosshair">
        <span></span>
        <span></span>
      </div>

      <div className="rgb-ring-center"></div>

      <div className="rgb-ring-code">
        SIGNAL / ACTIVE
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section page-section"
    >
      <div className="contact-content">

        {/* LEFT */}
        <div className="contact-info">
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
            GET IN TOUCH
          </motion.div>

          <motion.h2
            className="contact-title"
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
            LET'S WORK
            <br />
            TOGETHER.
          </motion.h2>

          <motion.div
            className="contact-details"
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            <a
              href="mailto:srivathsa.jg@gmail.com"
              className="contact-detail"
            >
              <Mail size={17} strokeWidth={1} />

              <span>
                srivathsa.jg@gmail.com
              </span>
            </a>

            <a
              href="tel:+916360123456"
              className="contact-detail"
            >
              <Phone size={17} strokeWidth={1} />

              <span>
                +91 6360 123 456
              </span>
            </a>

            <div className="contact-detail">
              <MapPin
                size={17}
                strokeWidth={1}
              />

              <span>
                Karnataka, India
              </span>
            </div>
          </motion.div>

          <motion.a
            href="mailto:srivathsa.jg@gmail.com"
            className="contact-button"
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
              delay: 0.4,
            }}
            whileHover={{
              x: 5,
            }}
          >
            <span>
              START A CONVERSATION
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={1}
            />
          </motion.a>
        </div>

        {/* RIGHT */}
        <motion.div
          className="contact-visual"
          initial={{
            opacity: 0,
            scale: 0.95,
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
          <RGBRing />
        </motion.div>
      </div>

      <div className="contact-footer">
        <span>
          CHANNEL / OPEN
        </span>

        <span className="contact-footer-line"></span>

        <span>
          RESPONSE TIME / 24H
        </span>
      </div>
    </section>
  );
}

export default Contact;