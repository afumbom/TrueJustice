import React from 'react';
import '../styles/DashboardStats.css'; // Corrected import path

const DashboardStats = ({ stats }) => {
  return (
    <div className="dashboard-stats">
      <div className="stats-card">
        <h3 className="stats-card-title">Total Cases</h3>
        <p className="stats-card-value">{stats.totalCases}</p>
      </div>
      <div className="stats-card">
        <h3 className="stats-card-title">Cases Solved</h3>
        <p className="stats-card-value">{stats.solvedCases}</p>
      </div>
      <div className="stats-card">
        <h3 className="stats-card-title">Cases in Progress</h3>
        <p className="stats-card-value">{stats.inProgressCases}</p>
      </div>
      <div className="stats-card">
        <h3 className="stats-card-title">New Reports</h3>
        <p className="stats-card-value">{stats.newReports}</p>
      </div>
    </div>
  );
};

export default DashboardStats;
