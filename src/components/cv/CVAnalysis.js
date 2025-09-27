import React, { useState } from 'react';
import CVUpload from '../components/cv/CVUpload';
import CVAnalysis from '../components/cv/CVAnalysis';
import SkillsExtracted from '../components/cv/SkillsExtracted';

const CVAnalysisPage = () => {
  const [cvData, setCvData] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCVUpload = async (file) => {
    setIsAnalyzing(true);
    // Simulate CV processing
    setTimeout(() => {
      const mockResults = {
        skills: [
          { name: 'JavaScript', level: 'Advanced', category: 'Technical' },
          { name: 'React', level: 'Intermediate', category: 'Technical' },
          { name: 'Node.js', level: 'Intermediate', category: 'Technical' },
          { name: 'Project Management', level: 'Beginner', category: 'Soft Skills' },
          { name: 'Communication', level: 'Advanced', category: 'Soft Skills' },
        ],
        experience: '3 years',
        education: 'Bachelor in Computer Science',
        summary: 'Experienced full-stack developer with strong problem-solving skills',
        recommendations: [
          'Consider adding TypeScript to your skillset',
          'Your project management skills could benefit from formal certification',
          'Strong technical foundation with good growth potential'
        ]
      };
      setAnalysisResults(mockResults);
      setCvData(file);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">CV Analysis</h1>
        <p className="page-subtitle">Upload your CV to extract skills and get personalized recommendations</p>
      </div>

      {!cvData ? (
        <CVUpload onUpload={handleCVUpload} isAnalyzing={isAnalyzing} />
      ) : (
        <div className="grid grid-2">
          <div>
            <CVAnalysis results={analysisResults} />
          </div>
          <div>
            <SkillsExtracted skills={analysisResults?.skills || []} />
            <div className="card" style={{ marginTop: '1.5rem' }}>
              <div className="card-header">
                <h3 className="card-title">Next Steps</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button className="btn btn-primary">
                  Find Matching Jobs
                </button>
                <button className="btn btn-secondary">
                  Get Course Recommendations
                </button>
                <button className="btn btn-outline">
                  Practice Interviews
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVAnalysisPage;