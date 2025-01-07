import React from 'react';
import '../styles/CaseCard.css'; // Corrected import path

const CaseCard = ({ caseData }) => {
  return (
    <div className="case-card">
      <h3 className="case-card-category">{caseData.category}</h3>
      <p className="case-card-detail"><strong>Location:</strong> {caseData.location}</p>
      <p className="case-card-detail"><strong>Description:</strong> {caseData.description}</p>
      <p className="case-card-detail"><strong>Status:</strong> {caseData.status}</p>
      <button className="case-card-button">View Details</button>
    </div>
  );
};

export default CaseCard;
