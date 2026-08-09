
import BackToProjects from "../components/BackToProjects";

import { Link } from "react-router-dom";

function BlockchainHealthcare() {
  return (
    <main className="project-detail-page">

      {/* BACK */}
      <Link to="/#work" className="project-back">
        ← BACK TO WORK
      </Link>

      {/* HERO */}
      <section className="project-detail-hero">

        <div className="project-detail-label">
          PROJECT 02 / BLOCKCHAIN + AI
        </div>

        <h1>
          BLOCKCHAIN-ENABLED
          <br />
          <span>SECURE HEALTHCARE</span>
        </h1>

        <p className="project-detail-intro">
          A decentralized healthcare platform designed to securely
          manage medical records, smart diagnostics, pharmacy
          operations and emergency healthcare workflows.
        </p>

        <div className="project-detail-meta">

          <div>
            <span>TYPE</span>
            <strong>HEALTHCARE PLATFORM</strong>
          </div>

          <div>
            <span>DOMAIN</span>
            <strong>BLOCKCHAIN / AI</strong>
          </div>

          <div>
            <span>ARCHITECTURE</span>
            <strong>FULL STACK</strong>
          </div>

        </div>

      </section>


      {/* OVERVIEW */}
      <section className="project-detail-section">

        <div className="project-section-number">
          01
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            OVERVIEW
          </div>

          <h2>
            Healthcare data,
            <span> secured by design.</span>
          </h2>

          <p>
            The Blockchain-Enabled Secure Healthcare System is a
            next-generation healthcare information platform that
            combines blockchain, artificial intelligence, OCR and
            modern web technologies.
          </p>

          <p>
            The system focuses on secure medical record management,
            intelligent healthcare assistance, pharmacy management,
            emergency response and controlled access to sensitive
            healthcare information.
          </p>

        </div>

      </section>


      {/* PROBLEM */}
      <section className="project-detail-section">

        <div className="project-section-number">
          02
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            THE PROBLEM
          </div>

          <h2>
            Healthcare needs
            <span> trust.</span>
          </h2>

          <div className="project-feature-grid">

            <article>
              <span>01</span>
              <h3>FRAGMENTED RECORDS</h3>
              <p>
                Medical information can be distributed across
                different healthcare environments.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>DATA SECURITY</h3>
              <p>
                Healthcare records contain highly sensitive
                information that requires strong protection.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>LIMITED TRACEABILITY</h3>
              <p>
                Healthcare actions need reliable auditability
                and controlled access.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>EMERGENCY RESPONSE</h3>
              <p>
                Emergency situations require fast coordination
                between patients and healthcare staff.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* SOLUTION */}
      <section className="project-detail-section">

        <div className="project-section-number">
          03
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            THE SOLUTION
          </div>

          <h2>
            One ecosystem.
            <span> Multiple capabilities.</span>
          </h2>

          <div className="project-tech-grid">

            <div className="project-tech">
              <strong>MEDICAL RECORDS</strong>
              <small>SECURE MANAGEMENT</small>
            </div>

            <div className="project-tech">
              <strong>BLOCKCHAIN</strong>
              <small>VERIFICATION</small>
            </div>

            <div className="project-tech">
              <strong>SMART DIAGNOSTICS</strong>
              <small>AI ASSISTANCE</small>
            </div>

            <div className="project-tech">
              <strong>OCR</strong>
              <small>REPORT PROCESSING</small>
            </div>

            <div className="project-tech">
              <strong>PHARMACY</strong>
              <small>MEDICINE MANAGEMENT</small>
            </div>

            <div className="project-tech">
              <strong>RESQONE</strong>
              <small>EMERGENCY RESPONSE</small>
            </div>

          </div>

        </div>

      </section>


      {/* BLOCKCHAIN */}
      <section className="project-detail-section">

        <div className="project-section-number">
          04
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            BLOCKCHAIN
          </div>

          <h2>
            Records that can be
            <span> verified.</span>
          </h2>

          <p>
            Blockchain is used as a verification and audit layer
            for healthcare records. Instead of placing large medical
            files directly on-chain, record metadata and hashes can
            be used to verify the integrity of off-chain information.
          </p>

          <div className="architecture-flow">

            <div className="architecture-box">
              <small>01</small>
              <strong>MEDICAL RECORD</strong>
              <span>DATA</span>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-box">
              <small>02</small>
              <strong>IPFS</strong>
              <span>OFF-CHAIN STORAGE</span>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-box">
              <small>03</small>
              <strong>HASH</strong>
              <span>INTEGRITY</span>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-box fraud-box">
              <small>04</small>
              <strong>BLOCKCHAIN</strong>
              <span>VERIFICATION</span>
            </div>

          </div>

        </div>

      </section>


      {/* AI */}
      <section className="project-detail-section">

        <div className="project-section-number">
          05
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            AI + SMART DIAGNOSTICS
          </div>

          <h2>
            Turning medical data
            <span> into insight.</span>
          </h2>

          <p>
            The platform integrates AI-assisted healthcare workflows
            to process medical information and support intelligent
            healthcare recommendations.
          </p>

          <div className="security-list">

            <div>
              <span>01</span>
              <strong>MEDICAL DATA ANALYSIS</strong>
              <p>
                Structured medical information can be processed
                for intelligent healthcare workflows.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>PERSONALIZED RECOMMENDATIONS</strong>
              <p>
                Patient information can be used to support
                personalized healthcare recommendations.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>AI MICROSERVICE</strong>
              <p>
                Python-based AI functionality can operate as an
                independent service within the platform.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* OCR */}
      <section className="project-detail-section">

        <div className="project-section-number">
          06
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            OCR MEDICAL REPORTS
          </div>

          <h2>
            From documents
            <span> to data.</span>
          </h2>

          <p>
            OCR processing allows information from medical reports
            and uploaded documents to be extracted and converted
            into structured information for healthcare workflows.
          </p>

          <div className="fraud-terminal">

            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
              OCR / PROCESSING
            </div>

            <div className="terminal-body">
              <p>&gt; REPORT RECEIVED</p>
              <p>&gt; IMAGE PREPROCESSING...</p>
              <p>&gt; OCR EXTRACTION...</p>
              <p>&gt; STRUCTURING MEDICAL VALUES...</p>
              <p className="terminal-success">
                &gt; EXTRACTION COMPLETE
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* PHARMACY */}
      <section className="project-detail-section">

        <div className="project-section-number">
          07
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            PHARMACY MANAGEMENT
          </div>

          <h2>
            Prescription to
            <span> delivery.</span>
          </h2>

          <div className="project-feature-grid">

            <article>
              <span>01</span>
              <h3>DIGITAL PRESCRIPTIONS</h3>
              <p>
                Doctors can generate digital prescriptions that
                can be processed by the pharmacy.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>PHARMACY QUEUE</h3>
              <p>
                Prescriptions can enter a pharmacy workflow for
                preparation and processing.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>DELIVERY ASSIGNMENT</h3>
              <p>
                Medicine deliveries can be assigned to delivery
                staff for fulfilment.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>DELIVERY TRACKING</h3>
              <p>
                Delivery status can be tracked throughout the
                medicine fulfilment process.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* RESQONE */}
      <section className="project-detail-section resqone-section">

        <div className="project-section-number">
          08
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            FEATURE / RESQONE
          </div>

          <h2>
            Emergency response,
            <span> inside healthcare.</span>
          </h2>

          <p>
            <strong>ResQOne is a feature of this healthcare platform,
            not a separate project.</strong>
          </p>

          <p>
            The emergency response workflow is designed to connect
            citizens or patients with healthcare services during
            critical situations and help coordinate emergency
            information and response.
          </p>

          <div className="resqone-panel">

            <div className="resqone-status">
              <span className="resqone-dot"></span>
              EMERGENCY SYSTEM / ACTIVE
            </div>

            <div className="resqone-flow">

              <div>
                <small>01</small>
                <strong>EMERGENCY</strong>
                <span>REQUEST</span>
              </div>

              <div className="architecture-arrow">
                →
              </div>

              <div>
                <small>02</small>
                <strong>RESPONSE</strong>
                <span>COORDINATION</span>
              </div>

              <div className="architecture-arrow">
                →
              </div>

              <div>
                <small>03</small>
                <strong>HEALTHCARE</strong>
                <span>ASSISTANCE</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SECURITY */}
      <section className="project-detail-section">

        <div className="project-section-number">
          09
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            SECURITY
          </div>

          <h2>
            Sensitive data needs
            <span> controlled access.</span>
          </h2>

          <div className="security-list">

            <div>
              <span>01</span>
              <strong>JWT AUTHENTICATION</strong>
              <p>
                Token-based authentication protects authenticated
                application workflows.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>ROLE-BASED ACCESS</strong>
              <p>
                Different healthcare roles receive appropriate
                access to system functionality.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>DATA ENCRYPTION</strong>
              <p>
                Sensitive information can be protected through
                encryption and secure data handling.
              </p>
            </div>

            <div>
              <span>04</span>
              <strong>BLOCKCHAIN AUDIT</strong>
              <p>
                Blockchain-backed verification provides an
                additional integrity and audit layer.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}
      <section className="project-detail-section">

        <div className="project-section-number">
          10
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            TECHNOLOGY STACK
          </div>

          <h2>
            The system
            <span> underneath.</span>
          </h2>

          <div className="project-tech-grid">

            <div className="project-tech">
              <strong>REACT</strong>
              <small>FRONTEND</small>
            </div>

            <div className="project-tech">
              <strong>TAILWIND CSS</strong>
              <small>UI</small>
            </div>

            <div className="project-tech">
              <strong>NODE.JS</strong>
              <small>BACKEND</small>
            </div>

            <div className="project-tech">
              <strong>EXPRESS</strong>
              <small>API</small>
            </div>

            <div className="project-tech">
              <strong>MONGODB</strong>
              <small>DATABASE</small>
            </div>

            <div className="project-tech">
              <strong>ETHEREUM</strong>
              <small>BLOCKCHAIN</small>
            </div>

            <div className="project-tech">
              <strong>SOLIDITY</strong>
              <small>SMART CONTRACT</small>
            </div>

            <div className="project-tech">
              <strong>IPFS</strong>
              <small>STORAGE</small>
            </div>

            <div className="project-tech">
              <strong>PYTHON</strong>
              <small>AI SERVICE</small>
            </div>

            <div className="project-tech">
              <strong>TESSERACT</strong>
              <small>OCR</small>
            </div>

          </div>

        </div>

      </section>


      {/* OUTCOME */}
      <section className="project-detail-section">

        <div className="project-section-number">
          11
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            PROJECT OUTCOME
          </div>

          <h2>
            A connected
            <span> healthcare ecosystem.</span>
          </h2>

          <p>
            The project brings together secure medical records,
            blockchain verification, AI-assisted healthcare,
            OCR processing, pharmacy management and emergency
            response into one integrated platform.
          </p>

          <div className="outcome-stats">

            <div>
              <strong>BLOCKCHAIN</strong>
              <span>VERIFIED RECORDS</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>SMART HEALTHCARE</span>
            </div>

            <div>
              <strong>RESQONE</strong>
              <span>EMERGENCY RESPONSE</span>
            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <section className="project-detail-footer">

        <div className="project-detail-label">
          PROJECT 02
        </div>

        <h2>
          BUILDING
          <br />
          <span>CONNECTED HEALTHCARE.</span>
        </h2>

        <BackToProjects />

      </section>

    </main>
  );
}

export default BlockchainHealthcare;