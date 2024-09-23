import { useNavigate } from "react-router-dom";
import { getUser, handleLogout as logoutService } from "../../service/roles";
import { useState, useEffect } from "react";

const DashNavbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await getUser();
                setUser(fetchedUser);
                console.log(user)
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    },[])

    const handleLogout = () => {
        logoutService(navigate); // Pass navigate to the logout function
    };

    const navigate = useNavigate();

    return (
        <div className="container-fluid" style={{ position: "sticky", zIndex: 999 }}>
            <nav
                className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
                <div className="container-fluid">

                    <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                        <li
                            className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none"
                        >
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <i className="fa fa-search"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-search animated fadeIn">
                                <form className="navbar-left navbar-form nav-search">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            placeholder="Search ..."
                                            className="form-control"
                                        />
                                    </div>
                                </form>
                            </ul>
                        </li>
                        <li className="nav-item topbar-user dropdown hidden-caret">
                            <a
                                className="dropdown-toggle profile-pic"
                                data-bs-toggle="dropdown"
                                href="#"
                                aria-expanded="false"
                            >
                                <span className="profile-username">
                                    <span className="op-7">Hi, <b>{user?.name}</b></span>
                                </span>
                            </a>
                            <ul className="dropdown-menu dropdown-user animated fadeIn">
                                <div className="dropdown-user-scroll scrollbar-outer">
                                    <li>
                                        <div className="user-box">
                                            <div className="avatar-lg">
                                                <img
                                                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                                    alt="image profile"
                                                    className="avatar-img rounded"
                                                />
                                            </div>
                                            <div className="u-text">
                                                { user ? (
                                                    <>
                                                <h4>{user?.name}</h4>
                                                <p className="text-muted">{user?.email}</p>
                                                <a
                                                    className="btn btn-xs btn-secondary btn-sm me-2"
                                                    onClick={() => navigate('/profile')}
                                                >View Profile
                                                </a>
                                                <a
                                                    className="btn btn-xs btn-secondary btn-sm "
                                                    onClick={handleLogout}
                                                >Logout
                                                </a>
                                                </>
                                                ):""
                                                }
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default DashNavbar;