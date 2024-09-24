import React, { useState } from "react";
import axios from "axios";
import doctor from "../assets/doctor.jpeg";
import DashSidebar from "./AdminUser/dashSidebar";
import DashNavbar from "./AdminUser/dashNavbar";
import "../css/vet.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    livestockType: "",
    expectedDate: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is not valid.*";
    }
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is not valid.*";
    } else if (!/^\d{11}$/.test(formData.contactNumber)) {
      errors.contactNumber = "Contact Number must be a valid 11-digit number";
    }
    if (!formData.livestockType.trim()) {
      errors.livestockType = "Livestock Type is not valid.*";
    }
    if (!formData.expectedDate) {
      errors.expectedDate = "Expected Date is not valid.*";
    } else {
      const today = new Date();
      const expectedDate = new Date(formData.expectedDate);
      if (expectedDate <= today) {
        errors.expectedDate = "Expected Date should be in the future";
      }
    }
    if (!formData.address.trim()) {
      errors.address = "Address is not valid.*";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const result = await axios.post(
        "/api/appointment/createAppointment",
        formData
      );
      alert("Appointment booked successfully!");
      setFormData({
        name: "",
        contactNumber: "",
        livestockType: "",
        expectedDate: "",
        address: "",
      });
    } catch (error) {
      console.error("Error submitting appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="wrapper">
    <DashSidebar></DashSidebar>
    <DashNavbar></DashNavbar>
    <div style={{ marginLeft: "35%", marginTop: "25px" }}>
      <h2>Book Veterinary Appointment</h2>
      <div style={{ marginLeft: "5%" }}>
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
          {errors.name && <div className="error">{errors.name}</div>}
          <div style={{ marginBottom: "20px" }} />
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            required
            className="form-input"
          />
          {errors.contactNumber && (
            <div className="error">{errors.contactNumber}</div>
          )}
          <div style={{ marginBottom: "20px" }} />
          <input
            type="text"
            name="livestockType"
            value={formData.livestockType}
            onChange={handleChange}
            placeholder="Livestock Type"
            required
            className="form-input"
          />
          {errors.livestockType && (
            <div className="error">{errors.livestockType}</div>
          )}
          <div style={{ marginBottom: "20px" }} />
          <input
            type="date"
            name="expectedDate"
            value={formData.expectedDate}
            onChange={handleChange}
            required
            className="form-input"
          />
          {errors.expectedDate && (
            <div className="error">{errors.expectedDate}</div>
          )}
          <div style={{ marginBottom: "20px" }} />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="form-input"
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </form>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "green",
            marginTop: "25px",
            marginBottom: "50px",
          }}
          onClick={handleSubmit}
        >
          Book Appointment
        </button>
      </div>
    </div>
    </div>
  );
};

export default AppointmentForm;
