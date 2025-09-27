import React from 'react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  const actions = [
    {
      title: 'Upload CV',
      description: 'Analyze your resume and extract skills',
      icon: '📄',
      link: '/cv-analysis',
      color: '#667eea'
    },
    {
      title: 'Find Jobs',
      description: 'Discover personalized job recommendations',
      icon: '🔍',
      link: '/job-search',
      color: '#48bb78'
    },
    {
      title: 'Practice Interview',
      description: 'Simulate interviews with AI feedback',
      icon: '🎤',
      link: '/interview-practice',
      color: '#ed8936'
    },
    {
      title: 'Learn Skills',
      description: 'Take courses to fill skill gaps',
      icon: '📚',
      link: '/learning',
      color: '#9f7aea'
    }
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Quick Actions</h3>
      </div>
      <div className="grid grid-2">
        {actions.map((action, index) => (
          <Link 
            key={index}
            to={action.link}
            className="quick-action-card"
            style={{
              display: 'block',
              padding: '1.5rem',
              border: '2px solid #e2e8f0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = action.color;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              {action.icon}
            </div>
            <h4 style={{ 
              fontSize: '1.1rem', 
              fontWeight: '600', 
              marginBottom: '0.5rem',
              color: action.color 
            }}>
              {action.title}
            </h4>
            <p style={{ color: '#718096', fontSize: '0.9rem' }}>
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;