// AppointmentCalendar.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../css/calendar.css'

// Set up the localizer by providing the moment Object to the correct localizer.
const localizer = momentLocalizer(moment);

const AppointmentCalendar = ({ appointments }) => {
  const events = appointments.map((appointment) => ({
    id: appointment.id,
    title: appointment.description,
    start: new Date(appointment.date + ' ' + appointment.time),
    end: new Date(appointment.date + ' ' + appointment.time),
  }));

  return (
    <div style={{ height: 600 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', margin: '45px 2px' }}
        selectable
      />
    </div>
  );
};

export default AppointmentCalendar;
