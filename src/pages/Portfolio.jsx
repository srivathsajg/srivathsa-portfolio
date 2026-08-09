import BackToProjects from "../components/BackToProjects";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <main className="project-detail-page">

      {/* BACK */}
      <Link to="/#work" className="project-back">
        ← BACK TO WORK
      </Link>

      {/* HERO */}
      <section className="project-detail-hero">

        <div className="project-detail-label">
          PROJECT 04 / WEB DEVELOPMENT
        </div>

        <h1>
          PERSONAL
          <br />
          <span>PORTFOLIO</span>
        </h1>

        <p className="project-detail-intro">
          A futuristic personal portfolio website designed to
          showcase development projects, technical skills,
          experience and professional interests through a
          highly visual interface.
        </p>

        <div className="project-detail-meta">

          <div>
            <span>TYPE</span>
            <strong>PERSONAL WEBSITE</strong>
          </div>

          <div>
            <span>FOCUS</span>
            <strong>DESIGN + DEVELOPMENT</strong>
          </div>

          <div>
            <span>INTERFACE</span>
            <strong>RESPONSIVE WEB</strong>
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
            A portfolio designed
            <span> as an experience.</span>
          </h2>

          <p>
            This portfolio was built to present my technical
            background, projects and development journey in a
            way that feels different from a traditional resume
            website.
          </p>

          <p>
            The visual language combines a dark interface,
            technical typography, grid systems, glitch effects
            and interactive elements to create a futuristic
            developer-focused experience.
          </p>

        </div>

      </section>


      {/* DESIGN */}
      <section className="project-detail-section">

        <div className="project-section-number">
          02
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            DESIGN SYSTEM
          </div>

          <h2>
            Minimal.
            <span> Technical. Interactive.</span>
          </h2>

          <div className="project-feature-grid">

            <article>
              <span>01</span>
              <h3>DARK INTERFACE</h3>
              <p>
                A dark foundation keeps the interface focused
                and gives the accent colors more visual impact.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>TECHNICAL TYPOGRAPHY</h3>
              <p>
                Monospace typography reinforces the engineering
                and terminal-inspired visual identity.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>GRID SYSTEM</h3>
              <p>
                Technical grid patterns are used to create depth
                and structure throughout the interface.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>GLITCH EFFECTS</h3>
              <p>
                Glitch and scan-line effects add a futuristic
                visual character without overwhelming the content.
              </p>
            </article>

            <article>
              <span>05</span>
              <h3>ACCENT COLORS</h3>
              <p>
                Red, cyan and blue accents are used to highlight
                important interface elements.
              </p>
            </article>

            <article>
              <span>06</span>
              <h3>RESPONSIVE DESIGN</h3>
              <p>
                The layout adapts across desktop, tablet and
                mobile screen sizes.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* SECTIONS */}
      <section className="project-detail-section">

        <div className="project-section-number">
          03
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            PORTFOLIO STRUCTURE
          </div>

          <h2>
            Everything in
            <span> one system.</span>
          </h2>

          <div className="project-tech-grid">

            <div className="project-tech">
              <strong>HERO</strong>
              <small>INTRODUCTION</small>
            </div>

            <div className="project-tech">
              <strong>ABOUT</strong>
              <small>PROFILE</small>
            </div>

            <div className="project-tech">
              <strong>PROJECTS</strong>
              <small>SELECTED WORK</small>
            </div>

            <div className="project-tech">
              <strong>SKILLS</strong>
              <small>TECH STACK</small>
            </div>

            <div className="project-tech">
              <strong>EXPERIENCE</strong>
              <small>JOURNEY</small>
            </div>

            <div className="project-tech">
              <strong>CONTACT</strong>
              <small>CONNECT</small>
            </div>

          </div>

        </div>

      </section>


      {/* PROJECT PAGES */}
      <section className="project-detail-section">

        <div className="project-section-number">
          04
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            PROJECT EXPERIENCE
          </div>

          <h2>
            Projects that
            <span> tell the story.</span>
          </h2>

          <div className="security-list">

            <div>
              <span>01</span>
              <strong>SMART BANKING</strong>
              <p>
                Full-stack banking platform with fraud detection
                and secure transaction workflows.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>BLOCKCHAIN HEALTHCARE</strong>
              <p>
                Healthcare platform combining blockchain, AI,
                OCR, pharmacy management and ResQOne.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>JARVIS</strong>
              <p>
                Local terminal-based AI assistant designed for
                continuous interaction and system automation.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}
      <section className="project-detail-section">

        <div className="project-section-number">
          05
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            TECHNOLOGY STACK
          </div>

          <h2>
            Built with
            <span> modern tools.</span>
          </h2>

          <div className="project-tech-grid">

            <div className="project-tech">
              <strong>REACT</strong>
              <small>FRONTEND</small>
            </div>

            <div className="project-tech">
              <strong>VITE</strong>
              <small>BUILD TOOL</small>
            </div>

            <div className="project-tech">
              <strong>CSS</strong>
              <small>DESIGN</small>
            </div>

            <div className="project-tech">
              <strong>FRAMER MOTION</strong>
              <small>ANIMATION</small>
            </div>

            <div className="project-tech">
              <strong>REACT ROUTER</strong>
              <small>NAVIGATION</small>
            </div>

            <div className="project-tech">
              <strong>GIT</strong>
              <small>VERSION CONTROL</small>
            </div>

            <div className="project-tech">
              <strong>GITHUB</strong>
              <small>HOSTING</small>
            </div>

          </div>

        </div>

      </section>


      {/* ARCHITECTURE */}
      <section className="project-detail-section">

        <div className="project-section-number">
          06
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            APPLICATION FLOW
          </div>

          <h2>
            From landing page
            <span> to project details.</span>
          </h2>

          <div className="architecture-flow">

            <div className="architecture-box">
              <small>01</small>
              <strong>HOME</strong>
              <span>PORTFOLIO</span>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-box">
              <small>02</small>
              <strong>PROJECTS</strong>
              <span>SELECTED WORK</span>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-box">
              <small>03</small>
              <strong>PROJECT</strong>
              <span>DETAIL PAGE</span>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-box fraud-box">
              <small>04</small>
              <strong>GITHUB</strong>
              <span>SOURCE CODE</span>
            </div>

          </div>

        </div>

      </section>


      {/* INTERACTION */}
      <section className="project-detail-section">

        <div className="project-section-number">
          07
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            INTERACTION
          </div>

          <h2>
            Designed to
            <span> respond.</span>
          </h2>

          <p>
            Interactive navigation connects the portfolio sections
            while project cards open dedicated detail pages.
            This allows visitors to move from a quick project
            overview into the complete technical story.
          </p>

          <div className="fraud-terminal">

            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
              NAVIGATION / ACTIVE
            </div>

            <div className="terminal-body">

              <p>&gt; PORTFOLIO LOADED</p>

              <p>&gt; PROJECTS FOUND: 03</p>

              <p>&gt; USER SELECTED PROJECT</p>

              <p>&gt; LOADING PROJECT DETAILS...</p>

              <p className="terminal-success">
                &gt; PAGE READY
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FUTURE */}
      <section className="project-detail-section">

        <div className="project-section-number">
          08
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            FUTURE DIRECTION
          </div>

          <h2>
            Always
            <span> evolving.</span>
          </h2>

          <div className="project-feature-grid">

            <article>
              <span>01</span>
              <h3>MORE PROJECTS</h3>
              <p>
                Continue expanding the portfolio as new technical
                projects are completed.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>LIVE DEMOS</h3>
              <p>
                Add live demonstrations and interactive previews
                to selected projects.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>CASE STUDIES</h3>
              <p>
                Provide deeper technical explanations of major
                engineering decisions.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>CONTINUOUS IMPROVEMENT</h3>
              <p>
                Improve accessibility, performance and interaction
                as the portfolio evolves.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* OUTCOME */}
      <section className="project-detail-section">

        <div className="project-section-number">
          09
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            PROJECT OUTCOME
          </div>

          <h2>
            More than a resume.
            <span> A digital identity.</span>
          </h2>

          <p>
            The portfolio brings together technical skills,
            engineering projects and personal development into
            one interactive experience designed to communicate
            both capability and personality.
          </p>

          <div className="outcome-stats">

            <div>
              <strong>WEB</strong>
              <span>DEVELOPMENT</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>PROJECTS</span>
            </div>

            <div>
              <strong>FULL</strong>
              <span>STACK</span>
            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <section className="project-detail-footer">

        <div className="project-detail-label">
          PROJECT 04
        </div>

        <h2>
          BUILDING
          <br />
          <span>THE NEXT VERSION.</span>
        </h2>

        <BackToProjects />

      </section>

    </main>
  );
}

export default Portfolio;