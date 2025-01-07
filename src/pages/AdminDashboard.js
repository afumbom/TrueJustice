import React, { useState, useEffect } from 'react';
import DashboardStats from '../components/DashboardStats'; // Reuse DashboardStats component
import '../styles/AdminDashboard.css'; // Corrected import path

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatsAndCases = async () => {
      try {
        const [statsResponse, casesResponse] = await Promise.all([
          fetch('/api/admin/stats'),
          fetch('/api/admin/cases'),
        ]);

        if (!statsResponse.ok || !casesResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const statsData = await statsResponse.json();
        const casesData = await casesResponse.json();

        setStats(statsData);
        setCases(casesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStatsAndCases();
  }, []);

  if (loading) {
    return <div className="admin-dashboard loading">Loading...</div>;
  }

  if (error) {
    return <div className="admin-dashboard error">Error: {error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <DashboardStats stats={stats} />
      <h2 className="cases-title">All Cases</h2>
      <ul className="cases-list">
        {cases.map((caseData) => (
          <li key={caseData.id} className="case-item">
            <span className="case-category">{caseData.category}</span> -{' '}
            <span className={`case-status ${caseData.status.toLowerCase()}`}>
              {caseData.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
