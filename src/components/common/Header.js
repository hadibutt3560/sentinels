import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          Sentinels
        </div>
        <div className="user-info">
          <span>Welcome, {user?.name || 'Job Seeker'}!</span>
          <div className="user-avatar">
            👤
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;