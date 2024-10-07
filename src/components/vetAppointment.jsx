import React, { useState, useEffect } from "react";
import DashSidebar from "./AdminUser/dashSidebar";
import DashNavbar from "./AdminUser/dashNavbar";
import ModalForBookingAppointment from "./AdminUser/addModalForBookAppointment";
import "../css/vet.css";
import doc from "../assets/doc.jpg";
import medical from "../assets/medical.jpg"
import { getBookedAppointmentsUser } from "../api/doctorPortalApi";
import { formatDay, formatTime } from "../util/getFormatedDateAndTIme";

const AppointmentForm = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBookedAppointment();
  }, [isOpen])

  const fetchBookedAppointment = async () => {
    try {
      const res = await getBookedAppointmentsUser();
      console.log(res.data)
      setData(res.data);
    } catch (err) {
      console.log(err, "err")
    }
  }

  const handleIsOpen = (id = null) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <DashSidebar></DashSidebar>
      <DashNavbar></DashNavbar>
      <div className = "row" style={{ marginLeft: "16%", marginTop: "35px" }}>
        {isOpen && <ModalForBookingAppointment isOpen={isOpen} handleIsOpen={handleIsOpen} />}
        {data.length > 0 ? (
           data.map((res, index) => (
          <div className="col-lg-3 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item d-flex h-100">
              <div className="service-img">
                <img className="img-fluid" src={doc} alt="" />
              </div>
              <div className="service-text p-5 pt-0">
                <div className="service-icon">
                  <img className="img-fluid rounded-circle" src={medical} alt="" />
                </div>
                <p className="mb-1"><b>Date:</b> {formatDay(res?.start_time)}</p>
                <p className="mb-1"><b>Time:</b> {formatTime(res?.start_time)} - {formatTime(res?.end_time)}</p>
                <p className="mb-1"><b>Doctor:</b> {res?.doctor_id?.name}</p>
                <p className="mb-1"><b>Description:</b> {res?.description}</p>
              </div>
            </div>
          </div>
           )
        )) : "No appoointments to show"}
        <button className="floating-button" onClick={() => { handleIsOpen(null) }}>
          +
        </button>
      </div>
    </div>
  );
};

export default AppointmentForm;
