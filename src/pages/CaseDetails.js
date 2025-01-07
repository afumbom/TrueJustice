import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/CaseDetails.css'; // Corrected the path for the CSS file

const CaseDetails = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const [caseDetails, setCaseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const response = await fetch(`/api/cases/${caseId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch case details');
        }
        const data = await response.json();
        setCaseDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseDetails();
  }, [caseId]);

  if (loading) {
    return <div className="case-details loading">Loading case details...</div>;
  }

  if (error) {
    return <div className="case-details error">Error: {error}</div>;
  }

  return (
    <div className="case-details">
      {caseDetails ? (
        <>
          <h1 className="case-title">{caseDetails.category}</h1>
          <p>
            <strong>Description:</strong> {caseDetails.description}
          </p>
          <p>
            <strong>Location:</strong> {caseDetails.location}
          </p>
          <p>
            <strong>Status:</strong>{' '}
            <span className={`status ${caseDetails.status.toLowerCase()}`}>
              {caseDetails.status}
            </span>
          </p>
          {caseDetails.evidence && (
            <div className="evidence-section">
              <h3>Evidence:</h3>
              <img
                src={caseDetails.evidence}
                alt="Case Evidence"
                className="evidence-image"
              />
            </div>
          )}
          <button className="back-button" onClick={() => navigate(-1)}>
            Back to Cases
          </button>
        </>
      ) : (
        <p>Case details not found.</p>
      )}
    </div>
  );
};

export default CaseDetails;
