import React, { useState } from 'react';
import './EmergencyForm.scss';

const DeclareEmergencyForm = () => {
  const [formData, setFormData] = useState({
    entityType: '',
    website: '',
    country: 'United Kingdom',
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
              <input 
                type="checkbox" 
                name="entityType" 
                value="business"
                checked={formData.entityType === 'business'}
                onChange={(e) => setFormData(prev => ({ ...prev, entityType: e.checked ? 'business' : '' }))}
              />
              <span className="checkmark"></span>
              As a business
            </label>
            
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                name="entityType" 
                value="individual"
                checked={formData.entityType === 'individual'}
                onChange={(e) => setFormData(prev => ({ ...prev, entityType: e.checked ? 'individual' : '' }))}
              />
              <span className="checkmark"></span>
              As an individual
            </label>
            
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                name="entityType" 
                value="public"
                checked={formData.entityType === 'public'}
                onChange={(e) => setFormData(prev => ({ ...prev, entityType: e.checked ? 'public' : '' }))}
              />
              <span className="checkmark"></span>
              As a public institution
            </label>
            
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                name="entityType" 
                value="team"
                checked={formData.entityType === 'team'}
                onChange={(e) => setFormData(prev => ({ ...prev, entityType: e.checked ? 'team' : '' }))}
              />
              <span className="checkmark"></span>
              As a team or department
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="website">Website *</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="country">Country *</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
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
            <label htmlFor="discipline">Discipline *</label>
            <select
              id="discipline"
              name="discipline"
              value={formData.discipline}
              onChange={handleInputChange}
              required
            >
              <option value="">Select discipline</option>
              <option value="Design">Design</option>
              <option value="Technology">Technology</option>
              <option value="Marketing">Marketing</option>
              <option value="Business">Business</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="reason">
              Why are you declaring? In a sentence or two, tell us why you're joining Design Declares.
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              rows={6}
            />
          </div>

          <div className="consent-section">
            <label className="checkbox-container small-text">
              <input
                type="checkbox"
                name="dataConsent"
                checked={formData.dataConsent}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              I consent for my data to be used for the purpose of this Declaration, and for my name and reason for signing to be used in the promotion of the Declaration on this site and across our social channels.
            </label>

            <label className="checkbox-container small-text">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
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