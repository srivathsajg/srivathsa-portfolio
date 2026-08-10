import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function RGBRing() {
  return (
    <div className="rgb-ring-wrapper">

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
      className="contact-section"
    >

      {/* =====================================================
          CONTACT CONTENT
          ===================================================== */}

      <div className="contact-content">

        {/* ===================================================
            LEFT
            =================================================== */}

        <div className="contact-info">

          {/* SECTION LABEL */}

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


          {/* TITLE */}

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


          {/* CONTACT DETAILS */}

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

            {/* EMAIL */}

            <a
              href="mailto:srivathsajg34@gmail.com"
              className="contact-detail"
            >
              <Mail
                size={17}
                strokeWidth={1}
              />

              <span>
                srivathsajg34@gmail.com
              </span>
            </a>


            {/* PHONE */}

            <a
              href="tel:+919019792834"
              className="contact-detail"
            >
              <Phone
                size={17}
                strokeWidth={1}
              />

              <span>
                +91 9019792834
              </span>
            </a>


            {/* LOCATION */}

            <div className="contact-detail">

              <MapPin
                size={17}
                strokeWidth={1}
              />

              <span>
                Tumakuru, Karnataka, India
              </span>

            </div>

          </motion.div>


          {/* =================================================
              START A CONVERSATION
              ================================================= */}

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=srivathsajg34@gmail.com&su=Let's%20Work%20Together"
            target="_blank"
            rel="noopener noreferrer"
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


        {/* ===================================================
            RIGHT — RGB RING
            =================================================== */}

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


      {/* =====================================================
          CONTACT FOOTER
          ===================================================== */}

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