import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home({ currentUser }) {
  const [welcomeData, setWelcomeData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchWelcomeMessage() {
      try {
        const response = await fetch('http://localhost:8000/');
        if (!response.ok) {
          throw new Error('Failed to fetch welcome message');
        }
        const data = await response.json();
        setWelcomeData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWelcomeMessage();
  }, []);

  if (loading) {
    return (
      <div className="home-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1 className="home-title">{welcomeData?.message}</h1>
      <p className="home-subtitle">{welcomeData?.ai_response}</p>
      {currentUser && (
        <div className="user-info">
          <strong>Logged in as: {currentUser.Email}</strong>
        </div>
      )}
      <div className="cta-buttons">
        <button
          className="cta-button primary"
          onClick={() => navigate('/interview')}
        >
          Start Interview
        </button>
        <button
          className="cta-button secondary"
          onClick={() => navigate('/pricing')}
        >
          View Pricing
        </button>
      </div>
      <div className="version-info">
        Version: {welcomeData?.version}
      </div>
    </div>
  );
}

export default Home;