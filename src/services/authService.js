import api from './api';

// User login
export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    const { token, user } = response.data;
    localStorage.setItem('authToken', token); // Save token to localStorage
    return user;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// User signup
export const signup = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem('authToken'); // Remove token from localStorage
  window.location.href = '/login'; // Redirect to login page
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error;
  }
};
