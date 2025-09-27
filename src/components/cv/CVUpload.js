import React, { useState } from 'react';
import LoadingSpinner from '../common/LoadingSpinner';

const CVUpload = ({ onUpload, isAnalyzing }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file) => {
    if (file.type === 'application/pdf' || file.type.startsWith('application/vnd.openxmlformats')) {
      setSelectedFile(file);
    } else {
      alert('Please select a PDF or Word document');
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="card-header">
        <h3 className="card-title">Upload Your CV/Resume</h3>
      </div>
      
      {isAnalyzing ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <LoadingSpinner size="large" />
          <h4 style={{ marginTop: '1rem' }}>Analyzing your CV...</h4>
          <p style={{ color: '#718096' }}>This may take a few moments while our AI extracts your skills and experience.</p>
        </div>
      ) : (
        <>
          <div
            className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
            style={{
              border: `2px dashed ${dragActive ? '#667eea' : '#e2e8f0'}`,
              borderRadius: '8px',
              padding: '3rem',
              textAlign: 'center',
              backgroundColor: dragActive ? '#f7fafc' : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input').click()}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
            <h4 style={{ marginBottom: '0.5rem' }}>
              {selectedFile ? selectedFile.name : 'Drop your CV here or click to browse'}
            </h4>
            <p style={{ color: '#718096' }}>
              Supports PDF and Word documents (max 10MB)
            </p>
            <input
              id="file-input"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileSelect(e.target.files[0])}
              style={{ display: 'none' }}
            />
          </div>
          
          {selectedFile && (
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#f7fafc', 
                borderRadius: '6px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <strong>{selectedFile.name}</strong>
                  <div style={{ fontSize: '0.875rem', color: '#718096' }}>
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>
                <button
                  onClick={() => setSelectedFile(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#e53e3e',
                    cursor: 'pointer',
                    fontSize: '1.2rem'
                  }}
                >
                  ✕
                </button>
              </div>
              
              <button 
                onClick={handleSubmit}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Analyze CV
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CVUpload;