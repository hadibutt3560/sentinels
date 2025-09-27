import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/cv-analysis', label: 'CV Analysis', icon: '📄' },
    { path: '/job-search', label: 'Job Search', icon: '🔍' },
    { path: '/interview-practice', label: 'Interview Practice', icon: '🎤' },
    { path: '/learning', label: 'Learning', icon: '📚' },
    { path: '/career-path', label: 'Career Path', icon: '🛤️' },
    { path: '/gig-work', label: 'Gig Work', icon: '💼' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-nav">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;