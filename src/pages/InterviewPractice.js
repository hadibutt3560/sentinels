import React, { useState } from "react";
import InterviewSimulator from "../components/interview/InterviewSimulator";

const InterviewPractice = () => {
  const [currentMode, setCurrentMode] = useState("setup");
  const [interviewConfig, setInterviewConfig] = useState({
    jobTitle: "",
    company: "",
    interviewType: "general",
    difficulty: "medium",
    duration: 15,
  });

  const interviewTypes = [
    { value: "general", label: "General Interview", icon: "💬" },
    { value: "technical", label: "Technical Interview", icon: "💻" },
    { value: "behavioral", label: "Behavioral Interview", icon: "🧠" },
    { value: "case-study", label: "Case Study", icon: "📊" },
  ];

  const startInterview = () => {
    setCurrentMode("interview");
  };

  const completeInterview = (responses) => {
    // Process interview responses and generate feedback
    setCurrentMode("feedback");
  };

  if (currentMode === "interview") {
    return (
      <InterviewSimulator
        config={interviewConfig}
        onComplete={completeInterview}
      />
    );
  }

  if (currentMode === "feedback") {
    return <div>Hardcoded answer</div>;
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Interview Practice</h1>
        <p className="page-subtitle">
          Practice with AI-powered mock interviews tailored to your target roles
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">🎯 Interview Setup</h3>
          </div>

          <div className="form-group">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Frontend Developer"
              value={interviewConfig.jobTitle}
              onChange={(e) =>
                setInterviewConfig((prev) => ({
                  ...prev,
                  jobTitle: e.target.value,
                }))
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company (Optional)</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Google, Microsoft"
              value={interviewConfig.company}
              onChange={(e) =>
                setInterviewConfig((prev) => ({
                  ...prev,
                  company: e.target.value,
                }))
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Interview Type</label>
            <div className="grid grid-2" style={{ gap: "0.5rem" }}>
              {interviewTypes.map((type) => (
                <div
                  key={type.value}
                  style={{
                    padding: "1rem",
                    border: `2px solid ${
                      interviewConfig.interviewType === type.value
                        ? "#667eea"
                        : "#e2e8f0"
                    }`,
                    borderRadius: "6px",
                    cursor: "pointer",
                    textAlign: "center",
                    backgroundColor:
                      interviewConfig.interviewType === type.value
                        ? "#f7fafc"
                        : "white",
                  }}
                  onClick={() =>
                    setInterviewConfig((prev) => ({
                      ...prev,
                      interviewType: type.value,
                    }))
                  }
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {type.icon}
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                    {type.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-2">
            <div className="form-group">
              <label className="form-label">Difficulty</label>
              <select
                className="form-input"
                value={interviewConfig.difficulty}
                onChange={(e) =>
                  setInterviewConfig((prev) => ({
                    ...prev,
                    difficulty: e.target.value,
                  }))
                }
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Duration (minutes)</label>
              <select
                className="form-input"
                value={interviewConfig.duration}
                onChange={(e) =>
                  setInterviewConfig((prev) => ({
                    ...prev,
                    duration: parseInt(e.target.value),
                  }))
                }
              >
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
              </select>
            </div>
          </div>

          <button
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "1rem" }}
            onClick={startInterview}
            disabled={!interviewConfig.jobTitle}
          >
            Start Interview
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">📈 Your Progress</h3>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <div className="grid grid-2">
              <div className="stats-card" style={{ margin: 0 }}>
                <div className="stats-number">12</div>
                <div className="stats-label">Interviews Completed</div>
              </div>
              <div className="stats-card" style={{ margin: 0 }}>
                <div className="stats-number">8.2</div>
                <div className="stats-label">Average Score</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h5 style={{ marginBottom: "1rem" }}>Recent Performance:</h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Technical Interview</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "100px", margin: 0 }}
                  >
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                    8.5/10
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Behavioral Interview</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "100px", margin: 0 }}
                  >
                    <div
                      className="progress-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <span style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                    7.5/10
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>General Interview</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "100px", margin: 0 }}
                  >
                    <div
                      className="progress-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                    9.0/10
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "#f7fafc",
              borderRadius: "6px",
              borderLeft: "4px solid #667eea",
            }}
          >
            <h5 style={{ marginBottom: "0.5rem" }}>💡 Quick Tips</h5>
            <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
              <li style={{ marginBottom: "0.25rem" }}>
                Use the STAR method for behavioral questions
              </li>
              <li style={{ marginBottom: "0.25rem" }}>
                Practice technical concepts out loud
              </li>
              <li>Prepare questions to ask your interviewer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InterviewPractice;
