import React from "react";
import { useNavigate } from "react-router-dom";

const DashSidebar = () => {
    const navigate = useNavigate();
    const navContent = [
        {id: 1, name: "Resource Management", path: "/resource-management"},
        {id: 2, name: "Feeding Routine", path: "/feeding-routine"},
        {id: 3, name: "Shelter and Space", path: "/shelter-space"}
    ]
    return (
        <div className="sidebar" data-background-color="dark">
            <div className="sidebar-logo">
                <div className="logo-header" data-background-color="dark">
                    <a href="index.html" className="logo">
                        <img
                            src="assets/img/kaiadmin/logo_light.svg"
                            alt="navbar brand"
                            className="navbar-brand"
                            height="20"
                        />
                    </a>
                    <span><h2 className="pt-1" style={{ color: "white" }}>Herhub</h2></span>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar">
                            <i className="gg-menu-right"></i>
                        </button>
                        <button className="btn btn-toggle sidenav-toggler">
                            <i className="gg-menu-left"></i>
                        </button>
                    </div>
                    <button className="topbar-toggler more">
                        <i className="gg-more-vertical-alt"></i>
                    </button>
                </div>
            </div>
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    <ul className="nav nav-secondary">
                    {navContent && navContent.map((links)=> (
                        <li className="nav-item" key={links.id}>
                            <a onClick={() => navigate(links.path)}>
                                <i className="fas fa-file"></i>
                                <p>{links.name}</p>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DashSidebar;