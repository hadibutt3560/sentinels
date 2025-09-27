import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import StatsCard from '../components/dashboard/StatsCard';
import QuickActions from '../components/dashboard/QuickActions';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  const stats = [
    { number: '5', label: 'Skills Identified', icon: '🎯' },
    { number: '12', label: 'Job Matches', icon: '💼' },
    { number: '3', label: 'Courses Completed', icon: '📚' },
    { number: '85%', label: 'Profile Completion', icon: '✅' },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back! Here's your career progress overview.</p>
      </div>

      <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Activity</h3>
          </div>
          <div>
            <div style={{ padding: '1rem 0', borderBottom: '1px solid #e2e8f0' }}>
              📄 CV analyzed - 3 new skills detected
            </div>
            <div style={{ padding: '1rem 0', borderBottom: '1px solid #e2e8f0' }}>
              💼 5 new job recommendations available
            </div>
            <div style={{ padding: '1rem 0', borderBottom: '1px solid #e2e8f0' }}>
              📚 Completed "JavaScript Fundamentals" course
            </div>
            <div style={{ padding: '1rem 0' }}>
              🎤 Practice interview session completed
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Current Goals</h3>
            <Link to="/career-path" className="btn btn-outline">View All</Link>
          </div>
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Master React Development</span>
                <span>70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Complete Portfolio</span>
                <span>45%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Interview Preparation</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickActions />
    </div>
  );
};

export default Dashboard;