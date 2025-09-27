import React from 'react';

const JobCard = ({ job }) => {
  const getMatchColor = (score) => {
    if (score >= 90) return '#22543d';
    if (score >= 75) return '#744210';
    return '#742a2a';
  };

  const getMatchBg = (score) => {
    if (score >= 90) return '#c6f6d5';
    if (score >= 75) return '#faf089';
    return '#fed7d7';
  };

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1.5rem',
      backgroundColor: 'white',
      transition: 'all 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      e.target.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.target.style.boxShadow = 'none';
      e.target.style.transform = 'translateY(0)';
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>
            {job.title}
          </h4>
          <p style={{ color: '#4a5568', fontSize: '1rem', marginBottom: '0.25rem' }}>
            🏢 {job.company}
          </p>
          <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
            📍 {job.location}
          </p>
          <p style={{ color: '#718096', fontSize: '0.9rem' }}>
            ⏰ {job.posted}
          </p>
        </div>
        <div style={{
          background: getMatchBg(job.matchScore),
          color: getMatchColor(job.matchScore),
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: '600'
        }}>
          {job.matchScore}% Match
        </div>
      </div>

      <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '1rem' }}>
        {job.description}
      </p>

      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
          {job.skills.map((skill, index) => (
            <span key={index} className="skill-tag high-level">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#22543d', fontWeight: '600', fontSize: '1.1rem' }}>
            💰 {job.salary}
          </span>
          <span style={{ color: '#718096', marginLeft: '1rem' }}>
            {job.type}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
            Save
          </button>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;