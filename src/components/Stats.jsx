import { motion } from "framer-motion";
import stats from "../data/stats";

function WireframeSphere({ side }) {
  return (
    <div className={`stats-sphere stats-sphere-${side}`}>
      <div className="sphere-ring sphere-ring-1"></div>
      <div className="sphere-ring sphere-ring-2"></div>
      <div className="sphere-ring sphere-ring-3"></div>
      <div className="sphere-ring sphere-ring-4"></div>
      <div className="sphere-line sphere-line-1"></div>
      <div className="sphere-line sphere-line-2"></div>
      <div className="sphere-line sphere-line-3"></div>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats-section page-section">
      <WireframeSphere side="left" />

      <div className="stats-header">
        <span className="stats-system">SYSTEM / 001</span>

        <span className="stats-line"></span>

        <span className="stats-system">DATA</span>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className={`stat-item stat-${stat.color}`}
            key={stat.label}
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <div className="stat-number">
              {stat.value}
            </div>

            <div className="stat-label">
              {stat.label}
            </div>

            <div className="stat-index">
              0{index + 1}
            </div>
          </motion.div>
        ))}
      </div>

      <WireframeSphere side="right" />

      <div className="stats-footer">
        <span>LIVE DATA</span>

        <span className="stats-status-dot"></span>

        <span>PROFILE ACTIVE</span>
      </div>
    </section>
  );
}

export default Stats;