import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        livestockType: '',
        expectedDate: '',
        address: ''
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
                address: ''
            });
        } catch (error) {
            console.error('Error submitting appointment:', error);
            alert('Failed to book appointment. Please try again.');
        }
    };

    return (
        <div>
            <h2>Book Veterinary Appointment</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
                <input type="text" name="livestockType" value={formData.livestockType} onChange={handleChange} placeholder="Livestock Type" required />
                <input type="date" name="expectedDate" value={formData.expectedDate} onChange={handleChange} required />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
