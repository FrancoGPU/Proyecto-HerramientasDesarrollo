import React from 'react';
import { STATS } from '../../constants/data';

const StatsBar = () => {
  return (
    <div className="stats-bar">
      {STATS.map((stat) => (
        <div key={stat.id} className="stat-item">
          <span className="stat-num">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
