// App.js
import React from 'react';
import AppointmentCalendar from './appointmentCalender';

const DoctorDashboard = () => {
  // Sample appointment data
  const appointments = [
    { id: 1, date: '2024-09-28', time: '09:00 AM', description: 'Check-up' },
    { id: 2, date: '2024-09-28', time: '10:00 AM', description: 'Follow-up' },
    { id: 3, date: '2024-09-29', time: '11:00 AM', description: 'Consultation' },
  ];

  return (
    <div>
      <h4>Doctor Appointment Calendar</h4>
      <AppointmentCalendar appointments={appointments} />
    </div>
  );
};

export default DoctorDashboard;
