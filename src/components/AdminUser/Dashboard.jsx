import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../api/feedingRoutineApi";
import { formatDate } from "../../util/getFormatedDateAndTIme";
import { toast } from "react-toastify";
import expand from "../../assets/expand.svg"

const Dashboard = () => {
    const [users, setUsers] = useState(null);
    const [user, setUser] = useState("user");

    const cards = [
        { id: 1, name: "Total Users", svg: expand},
        { id: 2, name: "Total Admins", svg: expand},
        { id: 3, name: "Total Doctors", svg: expand }
    ];

    useEffect(() => {
        let isMounted = true;
        const fetchAllUsers = async () => {
            try {
                const fetchedUsers = await getAllUsers(user);
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching users");
            }
        };
        fetchAllUsers();
        return () => {
            isMounted = false;
        };
    }, []);

    const handleDelete = async (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                const response = await deleteUser(userId);
                if (response.status === 200) {
                    toast.success("User deleted successfully");
                    setUsers(users.filter(user => user._id !== userId));
                } else {
                    toast.error("Failed to delete user");
                }
            } catch (error) {
                console.error("Error deleting user:", error);
                toast.error("Error occurred while deleting user");
            }
        }
    };
    

    return (
        <div className="wrapper">
            <DashSidebar></DashSidebar>
            <DashNavbar></DashNavbar>
            <div className="main-panel mt-5">
                <div className=" px-0">
                    <div className="container-fluid">
                        <div className="page-inner">
                            <div className="row">
                            {cards.map((link) => (
                                <div className="col-sm-6 col-md-3 col-lg-4">
                                    <div className="card card-stats card-round">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-icon">
                                                    <div
                                                        className="icon-big text-center icon-primary bubble-shadow-small"
                                                    >
                                                        <i className="fas fa-users"></i>
                                                    </div>
                                                </div>
                                                <div className="col col-stats ms-3 ms-sm-0">
                                                    <div className="numbers">
                                                        <p className="card-category">{link.name}</p>
                                                        <h4 className="card-title">1,294</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             ))}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-round">
                                        <div className="card-header">
                                            <div className="card-head-row card-tools-still-right">
                                                <div className="card-title">Users</div>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table align-items-center mb-0">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Appointments Booked</th>
                                                            <th scope="col">Joined On</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {users && users.length > 0 ? (
                                                            users.map((user, index) => (
                                                                <tr key={index}>
                                                                    <th scope="row">
                                                                        {user.name}
                                                                    </th>
                                                                    <td>{user.email}</td>
                                                                    <td>0</td>
                                                                    <td>{formatDate(user.created_at)}</td>
                                                                    <td>
                                                                        <button
                                                                            className="btn btn-danger btn-sm"
                                                                            onClick={() => handleDelete(user._id)} // Delete function
                                                                        >
                                                                            Delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td colSpan="4">No users found</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;