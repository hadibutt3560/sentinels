// src/pages/GigWork.js
const GigWork = () => {
  const gigs = [
    {
      id: 1,
      title: 'Build React Component Library',
      client: 'StartupXYZ',
      budget: '$500-800',
      duration: '1 week',
      skills: ['React', 'JavaScript', 'CSS'],
      description: 'Create a reusable component library for a growing startup.',
      difficulty: 'Intermediate',
      applications: 12
    },
    {
      id: 2,
      title: 'WordPress Site Maintenance',
      client: 'Local Business',
      budget: '$200-300',
      duration: '3 days',
      skills: ['WordPress', 'PHP', 'CSS'],
      description: 'Update and maintain existing WordPress website.',
      difficulty: 'Beginner',
      applications: 8
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Gig Work & Freelancing</h1>
        <p className="page-subtitle">Find short-term projects and freelance opportunities</p>
      </div>

      <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
        <div className="stats-card">
          <div className="stats-number">15</div>
          <div className="stats-label">Gigs Completed</div>
        </div>
        <div className="stats-card">
          <div className="stats-number">$3,240</div>
          <div className="stats-label">Total Earned</div>
        </div>
        <div className="stats-card">
          <div className="stats-number">4.8</div>
          <div className="stats-label">Average Rating</div>
        </div>
        <div className="stats-card">
          <div className="stats-number">3</div>
          <div className="stats-label">Active Projects</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">💼 Available Gigs</h3>
        </div>
        <div className="grid grid-2">
          {gigs.map(gig => (
            <div key={gig.id} className="card" style={{ margin: 0 }}>
              <h4 style={{ marginBottom: '0.5rem' }}>{gig.title}</h4>
              <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {gig.client} • {gig.applications} applications
              </p>
              
              <p style={{ marginBottom: '1rem', color: '#4a5568' }}>
                {gig.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1rem' }}>
                {gig.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.875rem', color: '#718096' }}>
                <span>💰 {gig.budget}</span>
                <span>⏰ {gig.duration}</span>
                <span>📊 {gig.difficulty}</span>
              </div>
              
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Apply for Gig
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};export default GigWork;