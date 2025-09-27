import React from 'react';

const StatsCard = ({ number, label, icon }) => {
  return (
    <div className="stats-card">
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
        {icon}
      </div>
      <div className="stats-number">{number}</div>
      <div className="stats-label">{label}</div>
    </div>
  );
};

export default StatsCard;