import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Navbar.css'; // Corrected import path
import { AuthContext } from '../context/AuthContext'; // Assuming you have an AuthContext

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Get user and logout function from context

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">TrueJustice</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Show 'Report Case' and 'About Us' links for anonymous users */}
          {!user && (
            <>
              <li>
                <Link to="/report-case">Report Case</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </>
          )}

          {user && user.role === 'admin' && (
            <>
              {/* Admin-specific links */}
              <li>
                <Link to="/admin-dashboard">Admin Dashboard</Link>
              </li>
              <li>
                <Link to="/view-cases">View Cases</Link>
              </li>
              <li>
                <Link to="/case-details">Case Details</Link>
              </li>
              <li>
                <Link to="/partner-dashboard">Partner Dashboard</Link>
              </li>
            </>
          )}

          {user && user.role === 'partner' && (
            <>
              {/* Partner-specific links */}
              <li>
                <Link to="/partner-dashboard">Partner Dashboard</Link>
              </li>
              <li>
                <Link to="/view-cases">View Cases</Link>
              </li>
              <li>
                <Link to="/case-details">Case Details</Link> {/* Add Case Details for Partner */}
              </li>
            </>
          )}

          {user ? (
            <li>
              <button onClick={logout}>Logout</button> {/* Logout button */}
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link> {/* Login link */}
            </li>
          )}

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {/* Add the new "Partner with Us" link */}
          <li>
            <Link to="/partner-with-us">Partner with Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
