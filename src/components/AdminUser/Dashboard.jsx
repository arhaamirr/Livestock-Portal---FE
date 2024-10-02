import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import { useEffect, useState } from "react";
import { getRole } from "../../service/roles";
import AdminDashboard from "./adminDashboard";
import DoctorDashboard from "./doctorDashboard";
import UserDashboard from "./userDashboard";

const Dashboard = () => {
    const [role, setRole] = useState(null);
    useEffect(() => {
        setRole(getRole());
    })

    return (
        <div className="wrapper">
            <DashSidebar></DashSidebar>
            <DashNavbar></DashNavbar>
            <div className="main-panel mt-5">
                <div className=" px-0">
                    <div className="container-fluid">
                        <div className="page-inner">
                            {role == "admin" && <AdminDashboard></AdminDashboard>}
                            {role == "user" && <UserDashboard></UserDashboard>}
                            {role == "doctor" && <DoctorDashboard></DoctorDashboard>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;