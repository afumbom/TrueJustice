import React, { useState } from 'react';
import '../styles/ReportForm.css'; // Corrected import path

const ReportForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    location: '',
    evidence: null,
    witnesses: '',
  });
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.location) newErrors.location = 'Location is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, evidence: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', formData);
      // Add API integration here (e.g., make an API call to save the report)
    }
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <h2>Report a Case</h2>

      <label>
        <span>Category:</span>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="gender-violence">Gender-Based Violence</option>
          <option value="rape">Rape</option>
          <option value="child-abuse">Child Abuse</option>
          <option value="police-brutality">Police Brutality</option>
        </select>
        {errors.category && <p className="error-text">{errors.category}</p>}
      </label>

      <label>
        <span>Description:</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the incident..."
        />
        {errors.description && <p className="error-text">{errors.description}</p>}
      </label>

      <label>
        <span>Location:</span>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Where did it happen?"
        />
        {errors.location && <p className="error-text">{errors.location}</p>}
      </label>

      <label>
        <span>Evidence (Photos/Videos):</span>
        <input type="file" name="evidence" onChange={handleFileChange} />
      </label>

      <label>
        <span>Witnesses:</span>
        <input
          type="text"
          name="witnesses"
          value={formData.witnesses}
          onChange={handleChange}
          placeholder="Enter witness names (optional)"
        />
      </label>

      <button type="submit">Submit Report</button>
    </form>
  );
};

export default ReportForm;
