import React, { useState, useEffect } from 'react';
import CaseCard from '../components/CaseCard'; // Reuse CaseCard component
import '../styles/ViewCases.css'; // Add styles for this page

const ViewCases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    // Fetch cases from API
    fetch('/api/cases')
      .then((res) => res.json())
      .then((data) => setCases(data))
      .catch((err) => console.error('Error fetching cases:', err));
  }, []);

  return (
    <div className="view-cases">
      <div className="header">
        <h1>View Reported Cases</h1>
        <p>Explore cases reported by individuals across the community.</p>
      </div>
      <div className="cases-grid">
        {cases.length > 0 ? (
          cases.map((caseData) => <CaseCard key={caseData.id} caseData={caseData} />)
        ) : (
          <p className="no-cases">No cases found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewCases;
