
import BackToProjects from "../components/BackToProjects";
import { Link } from "react-router-dom";

function Jarvis() {
  return (
    <main className="project-detail-page">

      {/* BACK */}
      <Link to="/#work" className="project-back">
        ← BACK TO WORK
      </Link>

      {/* HERO */}
      <section className="project-detail-hero">

        <div className="project-detail-label">
          PROJECT 03 / AI ASSISTANT
        </div>

        <h1>
          JARVIS
          <br />
          <span>PERSONAL AI ASSISTANT</span>
        </h1>

        <p className="project-detail-intro">
          A terminal-based personal AI assistant inspired by
          futuristic voice and command-driven assistants, designed
          to interact with the user continuously and execute
          useful computer tasks.
        </p>

        <div className="project-detail-meta">

          <div>
            <span>TYPE</span>
            <strong>PERSONAL AI ASSISTANT</strong>
          </div>

          <div>
            <span>INTERFACE</span>
            <strong>TERMINAL</strong>
          </div>

          <div>
            <span>AI ENGINE</span>
            <strong>LOCAL LLM</strong>
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
            An assistant that
            <span> lives in the terminal.</span>
          </h2>

          <p>
            JARVIS is a personal AI assistant designed to provide
            a continuous conversational experience directly from
            the terminal.
          </p>

          <p>
            The project focuses on combining a local language model,
            command routing, system utilities and conversational
            memory into a single assistant architecture.
          </p>

        </div>

      </section>


      {/* CORE FEATURES */}
      <section className="project-detail-section">

        <div className="project-section-number">
          02
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            CORE FEATURES
          </div>

          <h2>
            More than
            <span> a chatbot.</span>
          </h2>

          <div className="project-feature-grid">

            <article>
              <span>01</span>
              <h3>CONTINUOUS CONVERSATION</h3>
              <p>
                Designed to maintain a natural command-line
                conversation instead of requiring a new session
                for every interaction.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>COMMAND ROUTING</h3>
              <p>
                User requests are routed to the appropriate
                assistant capability.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>LOCAL AI</h3>
              <p>
                The assistant can use a locally running language
                model for AI responses.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>SYSTEM CONTROL</h3>
              <p>
                The architecture is designed to connect AI
                reasoning with useful computer operations.
              </p>
            </article>

            <article>
              <span>05</span>
              <h3>TERMINAL INTERFACE</h3>
              <p>
                A lightweight terminal interface keeps the
                assistant fast and focused.
              </p>
            </article>

            <article>
              <span>06</span>
              <h3>MODULAR ARCHITECTURE</h3>
              <p>
                Individual capabilities can be added without
                rewriting the entire assistant.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* ARCHITECTURE */}
      <section className="project-detail-section">

        <div className="project-section-number">
          03
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            ARCHITECTURE
          </div>

          <h2>
            From command
            <span> to action.</span>
          </h2>

          <div className="architecture-flow">

            <div className="architecture-box">
              <small>01</small>
              <strong>USER</strong>
              <span>COMMAND</span>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-box">
              <small>02</small>
              <strong>ROUTER</strong>
              <span>INTENT</span>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-box">
              <small>03</small>
              <strong>AI ENGINE</strong>
              <span>REASONING</span>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-box fraud-box">
              <small>04</small>
              <strong>ACTION</strong>
              <span>EXECUTION</span>
            </div>

          </div>

        </div>

      </section>


      {/* AI ENGINE */}
      <section className="project-detail-section">

        <div className="project-section-number">
          04
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            AI ENGINE
          </div>

          <h2>
            Local intelligence,
            <span> private by design.</span>
          </h2>

          <p>
            The assistant architecture is designed to work with a
            locally running language model, allowing AI processing
            to happen on the user's own machine rather than
            requiring every request to be sent to a remote service.
          </p>

          <div className="fraud-terminal">

            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
              JARVIS / ONLINE
            </div>

            <div className="terminal-body">
              <p>&gt; INITIALIZING ASSISTANT...</p>
              <p>&gt; LOADING LOCAL MODEL...</p>
              <p>&gt; CONNECTING ROUTER...</p>
              <p>&gt; SYSTEM MODULES READY</p>
              <p className="terminal-success">
                &gt; JARVIS ONLINE
              </p>
              <p>&gt; WAITING FOR COMMAND...</p>
            </div>

          </div>

        </div>

      </section>


      {/* ROUTER */}
      <section className="project-detail-section">

        <div className="project-section-number">
          05
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            INTENT ROUTING
          </div>

          <h2>
            Understanding what
            <span> the user wants.</span>
          </h2>

          <p>
            The router acts as the central decision layer. It
            determines what type of request has been received and
            directs it toward the appropriate capability.
          </p>

          <div className="security-list">

            <div>
              <span>01</span>
              <strong>CONVERSATION</strong>
              <p>
                Normal questions and conversational requests are
                passed to the AI engine.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>SYSTEM COMMAND</strong>
              <p>
                Commands that require a system operation can be
                directed toward the appropriate module.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>UTILITY</strong>
              <p>
                Useful utility operations can be handled through
                dedicated assistant capabilities.
              </p>
            </div>

            <div>
              <span>04</span>
              <strong>FALLBACK</strong>
              <p>
                Unknown requests can fall back to normal AI
                conversation.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TERMINAL EXPERIENCE */}
      <section className="project-detail-section">

        <div className="project-section-number">
          06
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            USER EXPERIENCE
          </div>

          <h2>
            Simple interface.
            <span> Powerful backend.</span>
          </h2>

          <p>
            JARVIS is intentionally designed around a terminal
            interface. The goal is to keep the interaction direct,
            fast and distraction-free.
          </p>

          <div className="fraud-terminal">

            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
              TERMINAL
            </div>

            <div className="terminal-body">

              <p>
                <span className="terminal-success">
                  user@
                </span>
                jarvis:~$
              </p>

              <p>
                &gt; open my project folder
              </p>

              <p>
                &gt; analyzing request...
              </p>

              <p>
                &gt; intent: SYSTEM_OPERATION
              </p>

              <p className="terminal-success">
                &gt; executing command...
              </p>

              <p>
                &gt; operation completed
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}
      <section className="project-detail-section">

        <div className="project-section-number">
          07
        </div>

        <div className="project-section-content">

          <div className="project-section-label">
            TECHNOLOGY STACK
          </div>

          <h2>
            The technology
            <span> behind JARVIS.</span>
          </h2>

          <div className="project-tech-grid">

            <div className="project-tech">
              <strong>PYTHON</strong>
              <small>CORE</small>
            </div>

            <div className="project-tech">
              <strong>OLLAMA</strong>
              <small>LOCAL AI</small>
            </div>

            <div className="project-tech">
              <strong>LLM</strong>
              <small>LANGUAGE MODEL</small>
            </div>

            <div className="project-tech">
              <strong>ROUTER</strong>
              <small>INTENT ENGINE</small>
            </div>

            <div className="project-tech">
              <strong>TERMINAL</strong>
              <small>INTERFACE</small>
            </div>

            <div className="project-tech">
              <strong>MODULAR SERVICES</strong>
              <small>ARCHITECTURE</small>
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
            Building toward a
            <span> true personal agent.</span>
          </h2>

          <div className="project-feature-grid">

            <article>
              <span>01</span>
              <h3>VOICE INTERACTION</h3>
              <p>
                Extend the terminal assistant with natural
                voice-based interaction.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>MEMORY</h3>
              <p>
                Add persistent contextual memory for more
                personalized conversations.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>MORE TOOLS</h3>
              <p>
                Connect additional tools and system capabilities
                to the assistant.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>AUTOMATION</h3>
              <p>
                Enable JARVIS to handle multi-step workflows
                with appropriate safeguards.
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
            A personal AI
            <span> control layer.</span>
          </h2>

          <p>
            JARVIS demonstrates how a local language model can be
            combined with application logic, intent routing and
            system capabilities to create a practical personal
            assistant.
          </p>

          <div className="outcome-stats">

            <div>
              <strong>LOCAL</strong>
              <span>AI PROCESSING</span>
            </div>

            <div>
              <strong>SMART</strong>
              <span>ROUTING</span>
            </div>

            <div>
              <strong>TERMINAL</strong>
              <span>INTERFACE</span>
            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <section className="project-detail-footer">

        <div className="project-detail-label">
          PROJECT 03
        </div>

        <h2>
          BUILDING
          <br />
          <span>PERSONAL INTELLIGENCE.</span>
        </h2>

        <BackToProjects />

      </section>

    </main>
  );
}

export default Jarvis;