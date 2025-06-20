import React, { useState } from 'react';
import './EmergencyForm.scss';
import CustomCheckbox from '../checkbox/CustomCheckbox';

const DeclareEmergencyForm = () => {
  const [formData, setFormData] = useState({
    entityType: '',
    website: '',
    country: '',
    discipline: '',
    email: '',
    reason: '',
    dataConsent: false,
    newsletter: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='declareEmergency__form'>
      <div className="emergency-form">
        <h1 className="form-title">I am Declaring Emergency</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="entity-type-section">
            <label className="checkbox-container">
              <div style={{ marginRight: '10px' , marginTop:'20px', marginLeft:'-35px' }}> <CustomCheckbox /></div>
              As a business
            </label>
            
            <label className="checkbox-container">
              <div style={{ marginRight: '10px' , marginTop:'20px', marginLeft:'-35px' }}> <CustomCheckbox /></div>
              As an individual
            </label>
            
            <label className="checkbox-container">
              <div style={{ marginRight: '10px' , marginTop:'20px', marginLeft:'-35px' }}> <CustomCheckbox /></div>
              As a public institution
            </label>
            
            <label className="checkbox-container">
              <div style={{ marginRight: '10px' , marginTop:'20px', marginLeft:'-35px' }}> <CustomCheckbox /></div>
              As a team or department
            </label>
          </div>

          <div className="form-field">
             <input type="text" id="website" name="website" placeholder="Website: *" value={formData.website} onChange={handleInputChange} required/>
          </div>

          <div className="form-field">
            <select  id="country"  name="country" className="custom-dropdown" value={formData.country}  onChange={handleInputChange}  required >
              <option value="" disabled selected hidden>Country: *</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <select id="discipline" name="discipline" className="custom-dropdown" value={formData.discipline} onChange={handleInputChange} required >
              <option value="" disabled selected hidden>Discipline: *</option>
              <option value="Design">Design</option>
              <option value="Design">Design</option>
              <option value="Technology">Technology</option>
              <option value="Marketing">Marketing</option>
              <option value="Business">Business</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <input type="email" id="email" name="email" placeholder="Email: *" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="form-field">
            <textarea
              id="reason"
              name="reason"
              placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
              value={formData.reason}
              onChange={handleInputChange}
              rows={6}
            />
          </div>

          <div className="consent-section">
            <label className="checkbox-container small-text">
              <div style={{ marginRight: '10px' , marginTop:'20px', marginLeft:'-35px' }}> <CustomCheckbox /></div>
              I consent for my data to be used for the purpose of this Declaration, and for my name and reason for signing to be used in the promotion of the Declaration on this site and across our social channels.
            </label>

            <label className="checkbox-container small-text">
              <div style={{ marginRight: '10px' , marginTop:'5px', marginLeft:'-35px' }}> <CustomCheckbox /></div>
              I would like to be added to the Design Declares newsletter and receive further updates.
            </label>
          </div>

          <div className="privacy-link">
            <a href="#" className="privacy-policy-link">View our Privacy Policy</a>
          </div>

          <button type="submit" className="submit-button">
            Declare Emergency Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeclareEmergencyForm;