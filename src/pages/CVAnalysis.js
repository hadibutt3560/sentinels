import React from 'react';

const CVAnalysisComponent = ({ results }) => {
  if (!results) return null;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Analysis Results</h3>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1rem', color: '#2d3748' }}>📋 Summary</h4>
        <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{results.summary}</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1rem', color: '#2d3748' }}>💼 Experience</h4>
        <p style={{ color: '#4a5568' }}>{results.experience}</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1rem', color: '#2d3748' }}>🎓 Education</h4>
        <p style={{ color: '#4a5568' }}>{results.education}</p>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#2d3748' }}>💡 Recommendations</h4>
        <ul style={{ paddingLeft: '1.5rem' }}>
          {results.recommendations.map((rec, index) => (
            <li key={index} style={{ 
              marginBottom: '0.5rem', 
              color: '#4a5568',
              lineHeight: '1.5'
            }}>
              {rec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CVAnalysisComponent;