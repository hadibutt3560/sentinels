import React, { useState } from 'react';
import JobCard from '../components/jobs/JobCard';

const JobSearch = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    jobType: 'all',
    salaryRange: 'all',
    experience: 'all'
  });

  const mockJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'Remote',
      salary: '$60,000 - $80,000',
      type: 'Full-time',
      matchScore: 95,
      skills: ['React', 'JavaScript', 'CSS'],
      description: 'Join our dynamic team building cutting-edge web applications.',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      salary: '$70,000 - $90,000',
      type: 'Full-time',
      matchScore: 88,
      skills: ['React', 'Node.js', 'MongoDB'],
      description: 'Build scalable applications in a fast-paced startup environment.',
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Junior React Developer',
      company: 'WebSolutions',
      location: 'New York, NY',
      salary: '$50,000 - $65,000',
      type: 'Full-time',
      matchScore: 82,
      skills: ['React', 'JavaScript', 'HTML/CSS'],
      description: 'Perfect opportunity for someone looking to grow their React skills.',
      posted: '3 days ago'
    }
  ];

  const handleFilterChange = (key, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Job Search</h1>
        <p className="page-subtitle">Find jobs that match your skills and career goals</p>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">🎯 Search Filters</h3>
          </div>
          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter city or 'Remote'"
                value={searchFilters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Job Type</label>
              <select
                className="form-input"
                value={searchFilters.jobType}
                onChange={(e) => handleFilterChange('jobType', e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Salary Range</label>
              <select
                className="form-input"
                value={searchFilters.salaryRange}
                onChange={(e) => handleFilterChange('salaryRange', e.target.value)}
              >
                <option value="all">All Ranges</option>
                <option value="entry">$30k - $50k</option>
                <option value="mid">$50k - $80k</option>
                <option value="senior">$80k+</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Experience Level</label>
              <select
                className="form-input"
                value={searchFilters.experience}
                onChange={(e) => handleFilterChange('experience', e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Apply Filters
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">📊 Match Statistics</h3>
          </div>
          <div className="grid grid-2">
            <div className="stats-card" style={{ margin: 0 }}>
              <div className="stats-number">{mockJobs.length}</div>
              <div className="stats-label">Jobs Found</div>
            </div>
            <div className="stats-card" style={{ margin: 0 }}>
              <div className="stats-number">88%</div>
              <div className="stats-label">Avg Match Score</div>
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h5 style={{ marginBottom: '0.5rem' }}>Top Skills in Demand:</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['React', 'JavaScript', 'Node.js', 'CSS'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">💼 Recommended Jobs</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <select className="form-input" style={{ width: 'auto' }}>
              <option>Sort by Match Score</option>
              <option>Sort by Date</option>
              <option>Sort by Salary</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mockJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;