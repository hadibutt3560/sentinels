import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Dashboard from './pages/Dashboard';
import CVAnalysis from './pages/CVAnalysis';
import JobSearch from './pages/JobSearch';
import InterviewPractice from './pages/InterviewPractice';
import Learning from './pages/Learning';
import CareerPath from './pages/CareerPath';
import GigWork from './pages/GigWork';
import Profile from './pages/Profile';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <AppProvider>
      <UserProvider>
        <Router>
          <div className="App">
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cv-analysis" element={<CVAnalysis />} />
                <Route path="/job-search" element={<JobSearch />} />
                <Route path="/interview-practice" element={<InterviewPractice />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/career-path" element={<CareerPath />} />
                <Route path="/gig-work" element={<GigWork />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Layout>
          </div>
        </Router>
      </UserProvider>
    </AppProvider>
  );
}

export default App;