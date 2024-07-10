import React, { useState } from 'react';
import axios from 'axios';
import doctor from "../assets/doctor.jpeg";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    livestockType: '',
    expectedDate: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/appointments', formData);
      alert('Appointment booked successfully!');
      setFormData({
        name: '',
        contactNumber: '',
        livestockType: '',
        expectedDate: '',
        address: '',
      });
    } catch (error) {
      console.error('Error submitting appointment:', error);
      alert('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="appointment-container" style={{marginLeft: "500px", marginTop: "50px"}}>
      <h2>Book Veterinary Appointment</h2>
      <div className="doctor-info">
        <img src={doctor} alt="Doctor Rashid Mert" className="doctor-image" />
        <p>Dr. Rashid Mert - Veterinary Surgeon</p>
      </div>
      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="form-input"
        />
        <div style={{ marginBottom: '20px' }} />  
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
          className="form-input"
        />
        <div style={{ marginBottom: '20px' }} />  
        <input
          type="text"
          name="livestockType"
          value={formData.livestockType}
          onChange={handleChange}
          placeholder="Livestock Type"
          required
          className="form-input"
        />
        <div style={{ marginBottom: '20px' }} />  
        <input
          type="date"
          name="expectedDate"
          value={formData.expectedDate}
          onChange={handleChange}
          required
          className="form-input"
        />
        <div style={{ marginBottom: '20px' }} />  
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="form-input"
        />
      </form>
      <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'green', marginTop: '25px', marginBottom: "50px" }} onChange={handleSubmit}
      >
          Book Appointment
        </button>
    </div>
  );
};

export default AppointmentForm;
