import React from 'react';
import ReportForm from '../components/ReportForm'; // Ensure ReportForm component is available and correctly imported
import '../styles/ReportCase.css'; // Ensure the path is correct

const ReportCase = () => {
  return (
    <div className="report-case">
      <div className="header">
        <h1>Report a Case</h1>
        <p>Fill in the details below to report an incident. Your voice can make a difference.</p>
      </div>
      <div className="form-container">
        <ReportForm /> {/* This will render the form for case reporting */}
      </div>
    </div>
  );
};

export default ReportCase;
