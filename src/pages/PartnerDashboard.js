import React, { useState, useEffect } from 'react';
import '../styles/PartnerDashboard.css'; // Ensure the path is correct for styles

const PartnerDashboard = () => {
  const [assignedCases, setAssignedCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch assigned cases from the API
    fetch('/api/partners/cases')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch assigned cases');
        }
        return res.json();
      })
      .then((data) => {
        setAssignedCases(data); // Set the assigned cases
        setLoading(false); // Turn off loading state
      })
      .catch((err) => {
        console.error('Error fetching cases:', err);
        setError('An error occurred while fetching cases');
        setLoading(false); // Turn off loading state
      });
  }, []);

  return (
    <div className="partner-dashboard">
      <h1>Partner Dashboard</h1>
      <h2>Assigned Cases</h2>
      {/* Display loading state */}
      {loading && <p>Loading cases...</p>}
      
      {/* Display error message if any */}
      {error && <p className="error-message">{error}</p>}
      
      {/* Render assigned cases if they are fetched successfully */}
      {!loading && !error && assignedCases.length === 0 && (
        <p>No cases assigned yet.</p>
      )}
      
      {/* Render the list of assigned cases */}
      {!loading && !error && assignedCases.length > 0 && (
        <ul className="cases-list">
          {assignedCases.map((caseData) => (
            <li key={caseData.id} className="case-item">
              <strong>Category:</strong> {caseData.category} <br />
              <strong>Location:</strong> {caseData.location} <br />
              <strong>Status:</strong> {caseData.status} <br />
              {/* Add any additional case details if necessary */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PartnerDashboard;
