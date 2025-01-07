import React, { useState } from 'react';
import '../styles/PartnershipForm.css'; // Make sure to create a CSS file for styling

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationType: '',
    description: '',
  });

  const [message, setMessage] = useState(''); // State to store success message
  const [loading, setLoading] = useState(false); // State to show loading during submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/submit-partnership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (response.status === 200) {
        setMessage('Thank you for partnering with us. Our admin will get in contact with you soon.');
      } else {
        setMessage('Error submitting the partnership request. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="partnership-form">
      <h2>Partner with Us</h2>
      <p>Fill out the form to partner with TrueJustice.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Organization Name</label>
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Person</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Organization Type</label>
          <select
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Law Firm">Law Firm</option>
            <option value="NGO">NGO</option>
            <option value="Government Department">Government Department</option>
            <option value="Embassy">Embassy</option>
            <option value="Country">Country</option>
            <option value="Justice Department">Justice Department</option>
            <option value="Law Enforcement Unit">Law Enforcement Unit</option>
            <option value="Civil Society">Civil Society</option>
          </select>
        </div>
        <div className="form-group">
          <label>Brief Description of Your Organization</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Partnership Request'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PartnershipForm;
