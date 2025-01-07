import api from './api';

// Get all cases
export const getAllCases = async () => {
  try {
    const response = await api.get('/cases');
    return response.data;
  } catch (error) {
    console.error('Error fetching cases:', error);
    throw error;
  }
};

// Get case by ID
export const getCaseById = async (caseId) => {
  try {
    const response = await api.get(`/cases/${caseId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching case details:', error);
    throw error;
  }
};

// Create a new case
export const createCase = async (caseData) => {
  try {
    const response = await api.post('/cases', caseData);
    return response.data;
  } catch (error) {
    console.error('Error creating case:', error);
    throw error;
  }
};

// Update case
export const updateCase = async (caseId, updatedData) => {
  try {
    const response = await api.put(`/cases/${caseId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating case:', error);
    throw error;
  }
};

// Delete case
export const deleteCase = async (caseId) => {
  try {
    const response = await api.delete(`/cases/${caseId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting case:', error);
    throw error;
  }
};
