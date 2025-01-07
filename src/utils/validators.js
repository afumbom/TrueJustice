// validators.js

export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  
  export const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/;  // Assuming phone numbers are 10 digits
    return regex.test(phone);
  };
  
  export const validateCaseTitle = (title) => {
    return title.length > 5 && title.length <= 100;
  };
  
  export const validateCaseDescription = (description) => {
    return description.length >= 10 && description.length <= 500;
  };
  
  export const validateForm = (formData) => {
    const errors = [];
    
    if (!validateEmail(formData.email)) errors.push('Invalid email');
    if (!validatePhoneNumber(formData.phone)) errors.push('Invalid phone number');
    if (!validateCaseTitle(formData.title)) errors.push('Case title must be between 5 and 100 characters');
    if (!validateCaseDescription(formData.description)) errors.push('Case description must be between 10 and 500 characters');
    
    return errors;
  };
  