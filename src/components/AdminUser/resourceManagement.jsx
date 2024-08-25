import React from "react";
import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import AddModal from "./addModal";
import "../../../src/css/addButton.css"

const ResourceManagement = () => {

    const users = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
    ];
    return (
        <div className="wrapper">
            <DashSidebar></DashSidebar>
            <DashNavbar></DashNavbar>
            <AddModal></AddModal>
            <div className="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
            <div className="main-panel mt-5">
                <div class="d-flex align-content-center align-items-center justify-content-evenly">
                {users && users.length > 0 ? ( users?.map((user) => (
                    <div className="card card-stats card-round" style={{width: "30%"}} key={user.id}>
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
                                        <p className="card-category">{user.name}</p>
                                        <h4 className="card-title">{user.age}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))):
                    <div style={{height: "50vh", width: "50vw", textAlign: "center", alignContent: "center", fontSize: "20px"}}>
                        No Resources to show. Please Add.
                    </div>
                    }
                </div>
            </div>
            <button className="floating-button">+</button>
        </div>
    );
}

export default ResourceManagement;