import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReportCase from './pages/ReportCase';
import ViewCases from './pages/ViewCases';
import CaseDetails from './pages/CaseDetails';
import AdminDashboard from './pages/AdminDashboard';
import PartnerDashboard from './pages/PartnerDashboard';
import AboutUs from './pages/AboutUs'; // Import AboutUs page
import Contact from './pages/Contact'; // Import Contact page
import Login from './pages/LoginPage'; // Import Login page
import PartnershipForm from './pages/PartnershipForm'; // Import PartnershipForm page
import { AuthProvider } from './context/AuthContext'; // Correct path to AuthContext
import ProtectedRoute from './ProtectedRoute'; // Correct path to ProtectedRoute
import './styles/App.css'; // Ensure global styles are imported

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          {/* Navbar should always be visible */}
          <Navbar />

          {/* Main content area where pages will be rendered */}
          <div className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/report-case" element={<ReportCase />} />
              <Route path="/about-us" element={<AboutUs />} /> {/* About Us Route */}
              <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
              <Route path="/login" element={<Login />} /> {/* Login Route */}
              <Route path="/partner-with-us" element={<PartnershipForm />} /> {/* Partnership Form Route */}

              {/* Protected Routes */}
              <Route
                path="/view-cases"
                element={
                  <ProtectedRoute allowedRoles={['admin', 'partner']}>
                    <ViewCases />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/case-details/:caseId"
                element={
                  <ProtectedRoute allowedRoles={['admin', 'partner']}>
                    <CaseDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/partner-dashboard"
                element={
                  <ProtectedRoute allowedRoles={['partner']}>
                    <PartnerDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>

          {/* Footer should always be visible at the bottom */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
