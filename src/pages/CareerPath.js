// src/pages/CareerPath.js
import React, { useState } from 'react';

const CareerPath = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  
  const careerPaths = [
    {
      id: 1,
      title: 'Frontend Developer → Senior Frontend Developer',
      currentRole: 'Frontend Developer',
      targetRole: 'Senior Frontend Developer',
      timeframe: '12-18 months',
      progress: 65,
      skills: {
        current: ['HTML/CSS', 'JavaScript', 'React'],
        needed: ['TypeScript', 'Testing', 'Performance Optimization']
      },
      milestones: [
        { title: 'Complete TypeScript Course', completed: true },
        { title: 'Build 3 Complex React Projects', completed: true },
        { title: 'Learn Testing with Jest/RTL', completed: false },
        { title: 'Master Performance Optimization', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Developer → Full Stack Developer',
      currentRole: 'Frontend Developer',
      targetRole: 'Full Stack Developer',
      timeframe: '18-24 months',
      progress: 30,
      skills: {
        current: ['JavaScript', 'React', 'HTML/CSS'],
        needed: ['Node.js', 'Databases', 'API Design', 'DevOps']
      },
      milestones: [
        { title: 'Learn Node.js Fundamentals', completed: false },
        { title: 'Master Database Design', completed: false },
        { title: 'Build Full Stack Applications', completed: false }
      ]
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Career Pathway</h1>
        <p className="page-subtitle">Plan your career progression with AI-generated pathways</p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">🛤️ Recommended Paths</h3>
          </div>
          {careerPaths.map(path => (
            <div 
              key={path.id}
              style={{
                padding: '1rem',
                border: `2px solid ${selectedPath === path.id ? '#667eea' : '#e2e8f0'}`,
                borderRadius: '6px',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedPath(path.id)}
            >
              <h4 style={{ marginBottom: '0.5rem' }}>{path.title}</h4>
              <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '1rem' }}>
                ⏰ {path.timeframe}
              </p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${path.progress}%` }}></div>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#4a5568', marginTop: '0.5rem' }}>
                {path.progress}% Complete
              </p>
            </div>
          ))}
        </div>

        {selectedPath && (
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">📊 Path Details</h3>
            </div>
            {(() => {
              const path = careerPaths.find(p => p.id === selectedPath);
              return (
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>{path.title}</h4>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ marginBottom: '0.5rem' }}>Skills You Have:</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                      {path.skills.current.map(skill => (
                        <span key={skill} className="skill-tag high-level">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ marginBottom: '0.5rem' }}>Skills Needed:</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                      {path.skills.needed.map(skill => (
                        <span key={skill} className="skill-tag medium-level">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 style={{ marginBottom: '1rem' }}>Milestones:</h5>
                    {path.milestones.map((milestone, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '0.5rem',
                        padding: '0.5rem',
                        backgroundColor: milestone.completed ? '#f0fff4' : '#fafafa',
                        borderRadius: '4px'
                      }}>
                        <span style={{ marginRight: '0.5rem' }}>
                          {milestone.completed ? '✅' : '⭕'}
                        </span>
                        <span style={{ 
                          textDecoration: milestone.completed ? 'line-through' : 'none',
                          color: milestone.completed ? '#22543d' : '#2d3748'
                        }}>
                          {milestone.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};
export default CareerPath;