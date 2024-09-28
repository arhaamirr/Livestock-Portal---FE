import { toast } from 'react-toastify'; // For notifications
import 'react-toastify/dist/ReactToastify.css'; // Toast styling
import React, { useEffect, useState } from "react";
import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../../css/datePicker.css"
import { DayPicker } from "react-day-picker";
import { setHours, setMinutes } from "date-fns";
import Modal from "react-bootstrap/Modal";

const AvailableSlotForm = () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [rate, setRate] = useState('');
    const [description, setDescription] = useState('');
    const [data, setData] = useState(null);

    const [selectedWeekday, setSelectedWeekday] = useState("");
  const [timeValue, setTimeValue] = useState("00:00");
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        // setData({ ...data, [name]: value });
    }; 

    const handleWeekdayChange = (e) => {
        setSelectedWeekday(e.target.value);
      };
    
      const handleTimeChange = (e) => {
        setTimeValue(e.target.value);
      };
    

    // const descriptionContent = [
    //     { id: 1, name: "Check-up" },
    //     { id: 2, name: "Follow-up" },
    //     { id: 3, name: "Consultation" },
    // ]

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!startTime || !endTime || !rate || !description) {
            toast.error('Please fill all fields.');
            return;
        }

        const newSlot = {
            startTime,
            endTime,
            rate,
            description,
        };

        console.log('New Available Slot:', newSlot); // You can replace this with your logic to save the slot

        // Clear the form
        setStartTime('');
        setEndTime('');
        setRate('');
        setDescription('');
        toast.success('Available slot added successfully!');
    };

    return (
        <div className="wrapper">
            <DashSidebar></DashSidebar>
            <DashNavbar></DashNavbar>
            
            <div className="main-panel row align-content-center justify-content-evenly">
                <div className="row col-4 align-content-center align-items-center justify-content-evenly" style={{ marginTop: "-500px" }}>
                    <h2>Add Available Slot</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formDoctorTimeslot">
                            <div className="row">
                                <div className="col-6">
                                    <div><Form.Label className="mt-2 me-2 col-12">Start Time: </Form.Label></div>
                                    <DatePicker
                                        selected={data?.start_time}
                                        onChange={(date) => handleDateChange(date, 'start_time')}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control cw-100"
                                        placeholderText="Select start time"
                                        required
                                    />
                                </div>
                                <div className="col-6 row px-0">
                                    <div className='col-12 px-5'>
                                        <Form.Label className="mt-2 ml-5 col-12 px-0">End Time: </Form.Label>
                                    </div>
                                    <div className='col-12 px-0' style={{ display: "flex", alignItems: "end", justifyContent: "end" }}>
                                        <DatePicker
                                        selected={data?.end_time}
                                        onChange={(date) => handleDateChange(date, 'end_time')}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control w-100"
                                        placeholderText="Select end time"
                                        required
                                    />
                                    
                                    </div>
                                </div>
                            </div>

                            <Form.Label className="mt-3">Fee (Pkr)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter rate"
                                value={data?.rate}
                                onChange={handleChange}
                                name="rate"
                                required
                            />

                            {/* <Form.Label className="mt-2">Description</Form.Label>
                            <Form.Select
                                aria-label="Description"
                                onChange={(e) => handleChange(e)}
                                value={data?.description}
                                name="description"
                            >
                                {descriptionContent?.map((des) => (
                                    <option
                                        key={des?.id}
                                        value={des?.name}
                                    >
                                        {des?.name}
                                    </option>
                                ))}
                            </Form.Select> */}
                        </Form.Group>

                        <Button variant="primary" type="submit mt-1">
                            Add slot
                        </Button>
                    </Form>
                </div>

                <div className="col-3">
                <select value={selectedWeekday} onChange={handleWeekdayChange} className="form-control">
                    <option value="">Select a weekday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                <input type="time" value={timeValue} onChange={handleTimeChange} className="form-control mt-3"/>
                </div>

                <div className="table-responsive col-12">
                    <table className="table align-items-center mb-0">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Start Time</th>
                                <th scope="col">End Time</th>
                                <th scope="col">Fee</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {users && users.length > 0 ? (
                                users.map((res, index) => (
                                    <tr key={index}>
                                        <th scope="row">
                                            {res.name}
                                        </th>
                                        <td>{res.email}</td>
                                        <td>0</td>
                                        <td>{formatDate(res.created_at)}</td>
                                        {user != "admin" && 
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(res._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No users found</td>
                                </tr>
                            )} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AvailableSlotForm;
