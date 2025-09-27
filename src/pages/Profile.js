// src/pages/Profile.js
import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'skills', label: 'Skills & Experience', icon: '🎯' },
    { id: 'preferences', label: 'Job Preferences', icon: '⚙️' },
    { id: 'portfolio', label: 'Portfolio', icon: '🎨' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Personal Information</h3>
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" defaultValue="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" defaultValue="john.doe@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-input" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input type="text" className="form-input" defaultValue="San Francisco, CA" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Professional Summary</label>
              <textarea 
                className="form-input form-textarea"
                defaultValue="Experienced frontend developer with 3+ years of experience building web applications using React and JavaScript."
              />
            </div>
            <button className="btn btn-primary">Save Changes</button>
          </div>
        );
      case 'skills':
        return (
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Skills & Experience</h3>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Technical Skills</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="skill-tag high-level">JavaScript ⭐⭐⭐</span>
                <span className="skill-tag high-level">React ⭐⭐⭐</span>
                <span className="skill-tag medium-level">Node.js ⭐⭐</span>
                <span className="skill-tag medium-level">TypeScript ⭐⭐</span>
                <span className="skill-tag">CSS ⭐⭐⭐</span>
              </div>
              <button className="btn btn-outline">+ Add Skill</button>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Work Experience</h4>
              <div className="card" style={{ margin: 0, marginBottom: '1rem' }}>
                <h5>Frontend Developer - TechCorp (2021-Present)</h5>
                <p style={{ color: '#718096', fontSize: '0.9rem' }}>
                  Developed responsive web applications using React and modern JavaScript.
                </p>
              </div>
              <button className="btn btn-outline">+ Add Experience</button>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Education</h4>
              <div className="card" style={{ margin: 0, marginBottom: '1rem' }}>
                <h5>Bachelor of Computer Science - State University (2017-2021)</h5>
                <p style={{ color: '#718096', fontSize: '0.9rem' }}>
                  Focused on software engineering and web development.
                </p>
              </div>
              <button className="btn btn-outline">+ Add Education</button>
            </div>
          </div>
        );
      case 'preferences':
        return (
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Job Preferences</h3>
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Preferred Job Types</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['Full-time', 'Part-time', 'Contract', 'Remote'].map(type => (
                    <label key={type} style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="checkbox" style={{ marginRight: '0.5rem' }} />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Preferred Locations</label>
                <input type="text" className="form-input" placeholder="e.g. San Francisco, Remote" />
              </div>
              <div className="form-group">
                <label className="form-label">Minimum Salary</label>
                <input type="number" className="form-input" placeholder="60000" />
              </div>
              <div className="form-group">
                <label className="form-label">Maximum Salary</label>
                <input type="number" className="form-input" placeholder="100000" />
              </div>
            </div>
            <button className="btn btn-primary">Update Preferences</button>
          </div>
        );
      case 'portfolio':
        return (
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Portfolio & Projects</h3>
            <div className="grid grid-2">
              <div className="card" style={{ margin: 0 }}>
                <h4>E-commerce Website</h4>
                <p style={{ color: '#718096', marginBottom: '1rem' }}>
                  Full-stack e-commerce platform built with React and Node.js
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                    View Live
                  </button>
                  <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                    GitHub
                  </button>
                </div>
              </div>
              <div className="card" style={{ margin: 0 }}>
                <h4>Task Management App</h4>
                <p style={{ color: '#718096', marginBottom: '1rem' }}>
                  Collaborative task management application with real-time updates
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Socket.io</span>
                  <span className="skill-tag">Express</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                    View Live
                  </button>
                  <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                    GitHub
                  </button>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }}>
              + Add Project
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Profile Settings</h1>
        <p className="page-subtitle">Manage your profile information and preferences</p>
      </div>

      <div className="card">
        <div style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '1rem 0',
                  cursor: 'pointer',
                  borderBottom: `3px solid ${activeTab === tab.id ? '#667eea' : 'transparent'}`,
                  color: activeTab === tab.id ? '#667eea' : '#718096',
                  fontWeight: activeTab === tab.id ? '600' : 'normal',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Profile;
