import { Link } from "react-router-dom";
import BackToProjects from "../components/BackToProjects";

function SmartBanking() {
  return (
    <main className="project-detail-page">

      <Link
        to="/"
        className="project-back"
      >
        ← BACK TO PORTFOLIO
      </Link>

      <section className="project-detail-hero">

        <div className="project-detail-label">
          PROJECT 01 / FULL STACK DEVELOPMENT
        </div>

        <h1>
          SMART BANKING
          <br />
          <span>&amp; FRAUD DETECTION</span>
        </h1>

        <p className="project-detail-intro">
          A secure full-stack banking platform designed to
          manage digital banking operations while detecting
          suspicious transactions using machine learning.
        </p>

        <div className="project-detail-meta">

          <div>
            <span>TYPE</span>
            <strong>FULL STACK APPLICATION</strong>
          </div>

          <div>
            <span>DOMAIN</span>
            <strong>FINTECH / SECURITY</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong>COMPLETED</strong>
          </div>

        </div>

      </section>


      <section className="project-detail-section">

        <div className="project-section-number">
          01
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            OVERVIEW
          </div>

          <h2>
            Banking built around
            <span> security.</span>
          </h2>

          <p>
            Smart Banking &amp; Fraud Detection is a full-stack
            banking application focused on providing secure
            digital banking functionality while identifying
            potentially fraudulent transactions.
          </p>

          <p>
            The platform combines a modern web interface,
            secure authentication, backend banking services,
            database management and machine-learning based
            fraud detection.
          </p>

        </div>

      </section>


      <section className="project-detail-section">

        <div className="project-section-number">
          02
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            CORE FEATURES
          </div>

          <h2>
            What the system
            <span> does.</span>
          </h2>

          <div className="project-feature-grid">

            <article>
              <span>01</span>
              <h3>USER AUTHENTICATION</h3>
              <p>
                Secure registration and login with protected
                authentication and role-based access.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>ACCOUNT MANAGEMENT</h3>
              <p>
                Users can manage their banking accounts and
                monitor account information.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>TRANSACTIONS</h3>
              <p>
                Supports digital banking transactions with
                transaction records and history.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>FRAUD DETECTION</h3>
              <p>
                Machine-learning based analysis helps identify
                suspicious transaction patterns.
              </p>
            </article>

          </div>

        </div>

      </section>


      <section className="project-detail-section">

        <div className="project-section-number">
          03
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            TECHNOLOGY STACK
          </div>

          <h2>
            Built with
            <span> modern technology.</span>
          </h2>

          <div className="project-tech-grid">

            <div className="project-tech">
              <strong>JAVA</strong>
              <small>BACKEND</small>
            </div>

            <div className="project-tech">
              <strong>SPRING BOOT</strong>
              <small>APPLICATION</small>
            </div>

            <div className="project-tech">
              <strong>SPRING SECURITY</strong>
              <small>SECURITY</small>
            </div>

            <div className="project-tech">
              <strong>MYSQL</strong>
              <small>DATABASE</small>
            </div>

            <div className="project-tech">
              <strong>HIBERNATE / JPA</strong>
              <small>ORM</small>
            </div>

            <div className="project-tech">
              <strong>REACT</strong>
              <small>FRONTEND</small>
            </div>

            <div className="project-tech">
              <strong>PYTHON</strong>
              <small>ML</small>
            </div>

            <div className="project-tech">
              <strong>RANDOM FOREST</strong>
              <small>FRAUD DETECTION</small>
            </div>

          </div>

        </div>

      </section>


      <section className="project-detail-footer">

        <div className="project-detail-label">
          PROJECT 01
        </div>

        <h2>
          BUILDING
          <br />
          <span>SAFER BANKING.</span>
        </h2>

        <BackToProjects />

      </section>

    </main>
  );
}

export default SmartBanking;