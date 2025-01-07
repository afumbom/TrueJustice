import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import AuthContext to use login function
import '../styles/LoginPage.css'; // Ensure this file exists for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to show loading spinner
  const { login } = useAuth(); // Get login function from context
  const navigate = useNavigate(); // To redirect users after login

  // Mock function for authenticating users (you should replace this with your actual authentication logic)
  const authenticateUser = (email, password) => {
    // Replace this logic with your real authentication, like an API request.
    if (email === 'admin@example.com' && password === 'admin123') {
      return { email, role: 'admin' };
    } else if (email === 'partner@example.com' && password === 'partner123') {
      return { email, role: 'partner' };
    }
    return null; // Invalid credentials
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    setError(''); // Clear previous error
    setLoading(true); // Start loading spinner

    try {
      const userData = authenticateUser(email, password);
      
      if (userData) {
        login(userData); // Store user in the context

        // Redirect user based on role
        if (userData.role === 'admin') {
          navigate('/admin-dashboard');
        } else if (userData.role === 'partner') {
          navigate('/partner-dashboard');
        }
      } else {
        setError('Invalid credentials, please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
