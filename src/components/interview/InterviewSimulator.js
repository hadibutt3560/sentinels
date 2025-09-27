import React, { useState, useEffect } from 'react';

const InterviewSimulator = ({ config, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const [currentResponse, setCurrentResponse] = useState('');
  const [timeLeft, setTimeLeft] = useState(config.duration * 60);
  const [isRecording, setIsRecording] = useState(false);

  const questions = {
    general: [
      "Tell me about yourself.",
      "Why are you interested in this position?",
      "What are your greatest strengths?",
      "Where do you see yourself in 5 years?",
      "Why should we hire you?"
    ],
    technical: [
      "Explain the difference between var, let, and const in JavaScript.",
      "What is the virtual DOM and how does React use it?",
      "How would you optimize a slow-performing web application?",
      "Explain the concept of closures in JavaScript.",
      "What are the differences between SQL and NoSQL databases?"
    ],
    behavioral: [
      "Tell me about a time when you had to work under pressure.",
      "Describe a situation where you had to work with a difficult team member.",
      "Give me an example of when you had to learn something quickly.",
      "Tell me about a mistake you made and how you handled it.",
      "Describe a time when you had to make a difficult decision."
    ]
  };

  const currentQuestions = questions[config.interviewType] || questions.general;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (currentResponse.trim()) {
      setResponses(prev => [...prev, {
        question: currentQuestions[currentQuestion],
        response: currentResponse.trim()
      }]);
      setCurrentResponse('');
      
      if (currentQuestion < currentQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        handleComplete();
      }
    }
  };

  const handleComplete = () => {
    const finalResponses = [...responses];
    if (currentResponse.trim()) {
      finalResponses.push({
        question: currentQuestions[currentQuestion],
        response: currentResponse.trim()
      });
    }
    onComplete(finalResponses);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would interface with speech recognition
  };

  return (
    <div>
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="page-title">Interview in Progress</h1>
            <p className="page-subtitle">
              {config.jobTitle} - {config.interviewType} interview
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: timeLeft < 300 ? '#e53e3e' : '#2d3748'
            }}>
              ⏰ {formatTime(timeLeft)}
            </div>
            <div style={{ color: '#718096' }}>
              Question {currentQuestion + 1} of {currentQuestions.length}
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="card-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="card-title">🤖 AI Interviewer</h3>
            <div className="progress-bar" style={{ width: '200px', margin: 0 }}>
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            background: '#f7fafc',
            padding: '1.5rem',
            borderRadius: '8px',
            borderLeft: '4px solid #667eea'
          }}>
            <h4 style={{ marginBottom: '1rem', color: '#2d3748' }}>
              Question {currentQuestion + 1}:
            </h4>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.6', 
              color: '#4a5568',
              margin: 0 
            }}>
              {currentQuestions[currentQuestion]}
            </p>
          </div>
        </div>

        <div className="form-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label className="form-label">Your Response:</label>
            <button
              onClick={toggleRecording}
              className={`btn ${isRecording ? 'btn-success' : 'btn-secondary'}`}
              style={{ padding: '0.5rem 1rem' }}
            >
              {isRecording ? '🔴 Recording...' : '🎤 Voice Input'}
            </button>
          </div>
          <textarea
            className="form-input form-textarea"
            value={currentResponse}
            onChange={(e) => setCurrentResponse(e.target.value)}
            placeholder="Type your response here... Try to be specific and use examples."
            style={{ minHeight: '150px' }}
          />
          <div style={{ 
            fontSize: '0.875rem', 
            color: '#718096', 
            marginTop: '0.5rem',
            textAlign: 'right' 
          }}>
            {currentResponse.length} characters
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={handleComplete}
          >
            End Interview
          </button>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            {currentQuestion > 0 && (
              <button 
                className="btn btn-outline"
                onClick={() => setCurrentQuestion(prev => prev - 1)}
              >
                Previous
              </button>
            )}
            <button 
              className="btn btn-primary"
              onClick={handleNext}
              disabled={!currentResponse.trim()}
            >
              {currentQuestion === currentQuestions.length - 1 ? 'Finish' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
        <div className="card-header">
          <h4 className="card-title">💡 Interview Tips</h4>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <strong>For Behavioral Questions:</strong>
            <p style={{ fontSize: '0.9rem', color: '#718096', margin: '0.5rem 0' }}>
              Use the STAR method: Situation, Task, Action, Result
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <strong>For Technical Questions:</strong>
            <p style={{ fontSize: '0.9rem', color: '#718096', margin: '0.5rem 0' }}>
              Explain your thinking process step by step
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <strong>General Tips:</strong>
            <p style={{ fontSize: '0.9rem', color: '#718096', margin: '0.5rem 0' }}>
              Be specific, use examples, and stay confident
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSimulator;