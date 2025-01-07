import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Corrected the path for the CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate('/report-case'); // Redirects to report-case page
  };

  const handlePartnerClick = () => {
    navigate('/partner-with-us'); // Redirects to the Partner with Us page
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to TrueJustice</h1>
        <p>Your voice matters. Together, we seek justice for victims of injustice.</p>
        <button className="report-button" onClick={handleReportClick}>
          Report a Case
        </button>
      </section>
      <section className="features">
        <h2>Our Mission</h2>
        <p>
          We connect victims of injustice with legal aid, NGOs, and law enforcement to pursue justice and accountability.
        </p>
        <div className="feature-cards">
          <div className="card">
            <h3>Report Incidents</h3>
            <p>Share your case with evidence, and we'll take it from there.</p>
            <button className="report-button" onClick={handleReportClick}>
              Report a Case
            </button>
          </div>
          <div className="card" onClick={handlePartnerClick}> {/* Added onClick handler here */}
            <h3>Partner with Us</h3>
            <p>We work with NGOs, lawyers, and law enforcement to ensure justice.</p>
          </div>
          <div className="card">
            <h3>Donate</h3>
            <p>Your contribution helps us support victims and promote justice.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
