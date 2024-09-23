import React, { useState, useEffect } from 'react';
import { getUser } from '../../service/roles';
import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import "../../css/profile.css"

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await getUser(); //change the api call
                setUser(fetchedUser);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    },[])

    return (
        <div className="wrapper">
        <DashSidebar></DashSidebar>
        <DashNavbar></DashNavbar>
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-5 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                        <span className="font-weight-bold">{user?.name}</span>
                        <span className="text-black-50">{user?.email}</span><span> </span></div>
                </div>
                <div className="col-md-6 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Username</label>
                            <input type="text" className="form-control mt-1" placeholder="Enter Username" value=""/></div>
                            <div className="col-md-12 mt-4"><label className="labels">Mobile Number</label>
                            <input type="text" className="form-control mt-1" placeholder="Enter phone number" value=""/></div>
                            <div className="col-md-12 mt-4"><label className="labels">Address Line 1</label>
                            <input type="text" className="form-control mt-1" placeholder="Enter address line 1" value=""/></div>
                            <div className="col-md-12 mt-4"><label className="labels">Address Line 2</label>
                            <input type="text" className="form-control mt-1" placeholder="Enter address line 2" value=""/></div>
                            <div className="col-md-12 mt-4"><label className="labels">Postcode</label>
                            <input type="text" className="form-control mt-1" placeholder="Enter postcode" value=""/></div>
                            <div className="col-md-12 mt-4"><label className="labels">Email ID</label>
                            <input type="text" className="form-control mt-1" placeholder="Enter email id" value="" disabled/></div>
                        </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Profile;