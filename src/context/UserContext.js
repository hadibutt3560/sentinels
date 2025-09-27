
// src/context/UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    skills: [],
    preferences: {
      jobTypes: ['full-time'],
      locations: ['remote'],
      salaryRange: { min: 50000, max: 100000 }
    },
    goals: [],
    completedCourses: [],
    interviewHistory: []
  });

  const [userProfile, setUserProfile] = useState({
    cvAnalyzed: false,
    skillsExtracted: [],
    jobMatches: [],
    completionScore: 45
  });

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const updateUserProfile = (updates) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  const value = {
    user,
    userProfile,
    updateUser,
    updateUserProfile
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };