import React from 'react';

const SkillsExtracted = ({ skills }) => {
  const getSkillColor = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return { bg: '#c6f6d5', color: '#22543d' };
      case 'intermediate':
        return { bg: '#fed7d7', color: '#742a2a' };
      case 'beginner':
        return { bg: '#bee3f8', color: '#2c5282' };
      default:
        return { bg: '#edf2f7', color: '#4a5568' };
    }
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">🎯 Skills Detected</h3>
      </div>
      
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category} style={{ marginBottom: '1.5rem' }}>
          <h5 style={{ 
            marginBottom: '1rem', 
            color: '#2d3748',
            fontSize: '1rem',
            fontWeight: '600'
          }}>
            {category}
          </h5>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categorySkills.map((skill, index) => {
              const colors = getSkillColor(skill.level);
              return (
                <div
                  key={index}
                  style={{
                    background: colors.bg,
                    color: colors.color,
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ fontWeight: '500' }}>{skill.name}</span>
                  <span style={{ 
                    fontSize: '0.75rem',
                    opacity: 0.8,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {skill.level}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      
      <div style={{ 
        marginTop: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f7fafc',
        borderRadius: '6px',
        borderLeft: '4px solid #667eea'
      }}>
        <p style={{ 
          fontSize: '0.875rem',
          color: '#4a5568',
          margin: 0
        }}>
          <strong>Pro Tip:</strong> Skills marked as "Beginner" are great opportunities for improvement. 
          Check out our learning recommendations to level up!
        </p>
      </div>
    </div>
  );
};

export default SkillsExtracted;