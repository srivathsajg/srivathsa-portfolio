import { motion } from "framer-motion";
import stats from "../data/stats";



function Stats() {
  return (
    <section className="stats-section page-section">

      <div className="stats-header">
        <span>SYSTEM / 001</span>

        <span className="stats-line"></span>

        <span>DATA</span>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`stat-item stat-${stat.color}`}
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
              duration: 0.5,
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

      <div className="stats-footer">
        <span>LIVE DATA</span>

        <span className="stats-status-dot"></span>

        <span>PROFILE ACTIVE</span>
      </div>

    </section>
  );
}

export default Stats;