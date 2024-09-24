import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";

const Dashboard = () => {
    return (
        <div className="wrapper">
            <DashSidebar></DashSidebar>
            <DashNavbar></DashNavbar>
            <div className="main-panel mt-5">
                <div className=" px-0">
                    <div className="container-fluid">
                        <div className="page-inner">
                            <div className="row">
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
                                                        <p className="card-category">Total Admins</p>
                                                        <h4 className="card-title">1,294</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-4">
                                    <div className="card card-stats card-round">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-icon">
                                                    <div
                                                        className="icon-big text-center icon-info bubble-shadow-small"
                                                    >
                                                        <i className="fas fa-user-check"></i>
                                                    </div>
                                                </div>
                                                <div className="col col-stats ms-3 ms-sm-0">
                                                    <div className="numbers">
                                                        <p className="card-category">Total Users</p>
                                                        <h4 className="card-title">1303</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-4">
                                    <div className="card card-stats card-round">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-icon">
                                                    <div
                                                        className="icon-big text-center icon-success bubble-shadow-small"
                                                    >
                                                        <i className="fas fa-luggage-cart"></i>
                                                    </div>
                                                </div>
                                                <div className="col col-stats ms-3 ms-sm-0">
                                                    <div className="numbers">
                                                        <p className="card-category">Total Doctors</p>
                                                        <h4 className="card-title">1,345</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-round">
                                        <div className="card-header">
                                            <div className="card-head-row card-tools-still-right">
                                                <div className="card-title">Users</div>
                                                <div className="card-tools">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-icon btn-clean me-0"
                                                            type="button"
                                                            id="dropdownMenuButton"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="fas fa-ellipsis-h"></i>
                                                        </button>
                                                    </div>
                                                </div>
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
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                <button
                                                                    className="btn btn-icon btn-round btn-success btn-sm me-2"
                                                                >
                                                                    <i className="fa fa-check"></i>
                                                                </button>
                                                                Payment from #10231
                                                            </th>
                                                            <td>Mar 19, 2020, 2.45pm</td>
                                                            <td>$250.00</td>
                                                            <td>
                                                                <span className="badge badge-success">Completed</span>
                                                            </td>
                                                        </tr>
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