// src/pages/Learning.js
import React, { useState } from 'react';

const Learning = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const courses = [
    {
      id: 1,
      title: 'Advanced React Development',
      provider: 'TechLearn',
      duration: '6 weeks',
      level: 'Intermediate',
      rating: 4.8,
      enrolled: 1250,
      price: 'Free',
      category: 'technical',
      skills: ['React', 'Hooks', 'Context API'],
      description: 'Master advanced React concepts and build scalable applications.'
    },
    {
      id: 2,
      title: 'Effective Communication Skills',
      provider: 'SoftSkills Pro',
      duration: '4 weeks',
      level: 'Beginner',
      rating: 4.6,
      enrolled: 890,
      price: '$49',
      category: 'soft-skills',
      skills: ['Communication', 'Presentation', 'Leadership'],
      description: 'Develop strong communication skills for professional success.'
    },
    {
      id: 3,
      title: 'Project Management Fundamentals',
      provider: 'PM Institute',
      duration: '8 weeks',
      level: 'Beginner',
      rating: 4.7,
      enrolled: 2100,
      price: 'Free',
      category: 'management',
      skills: ['Project Management', 'Agile', 'Scrum'],
      description: 'Learn project management methodologies and tools.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'technical', label: 'Technical Skills' },
    { value: 'soft-skills', label: 'Soft Skills' },
    { value: 'management', label: 'Management' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Learning & Development</h1>
        <p className="page-subtitle">Enhance your skills with personalized course recommendations</p>
      </div>

      <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
        <div className="stats-card">
          <div className="stats-number">12</div>
          <div className="stats-label">Courses Completed</div>
        </div>
        <div className="stats-card">
          <div className="stats-number">156</div>
          <div className="stats-label">Hours Learned</div>
        </div>
        <div className="stats-card">
          <div className="stats-number">8</div>
          <div className="stats-label">Certificates Earned</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">📚 Recommended Courses</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {categories.map(category => (
              <button
                key={category.value}
                className={`btn ${selectedCategory === category.value ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedCategory(category.value)}
                style={{ padding: '0.5rem 1rem' }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-2">
          {filteredCourses.map(course => (
            <div key={course.id} className="card" style={{ margin: 0 }}>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>{course.title}</h4>
                <p style={{ color: '#718096', fontSize: '0.9rem' }}>{course.provider}</p>
              </div>
              
              <p style={{ marginBottom: '1rem', color: '#4a5568', fontSize: '0.9rem' }}>
                {course.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1rem' }}>
                {course.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.875rem', color: '#718096' }}>
                <span>⏰ {course.duration}</span>
                <span>📊 {course.level}</span>
                <span>⭐ {course.rating} ({course.enrolled})</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', color: course.price === 'Free' ? '#22543d' : '#2d3748' }}>
                  {course.price}
                </span>
                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};export default Learning;