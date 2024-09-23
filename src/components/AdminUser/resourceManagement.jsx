import { useEffect, useState } from "react";
import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import AddModal from "./addModal";
import "../../../src/css/addButton.css";
import { getResources } from "../../api/feedingRoutineApi";
import { formatDate } from "../../util/getFormatedDateAndTIme";

const ResourceManagement = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [resourceId, setResourceId] = useState();
  const [data, setData] = useState([]);

  const handleIsOpen = ( id = null) => {
    setResourceId(id);
    setIsOpen((prev) => !prev);
  };
  useEffect(()=>{
    fetchResources();
  }, [])

  const fetchResources = async () =>{
    try
    {
        const resources = await getResources();
        console.log(resources, "resources")
        setData(resources)
    } catch(e){
        console.error(e);
    }
  }

  return (
    <div className="wrapper">
      <DashSidebar></DashSidebar>
      <DashNavbar></DashNavbar>
      {isOpen && <AddModal isOpen={isOpen}  handleIsOpen={handleIsOpen} resourceId={resourceId}/> }
      <div className="main-panel mt-5">
        <div className="row align-content-center align-items-center justify-content-evenly">
          {data && data.length > 0 ? (
            data?.map((res) => (
              <div
                className="col-6 card card-stats card-round"
                style={{ width: "40%" }}
                key={res?._id}
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-primary bubble-shadow-small">
                        <i className="fas fa-users"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                      <p className="card-category"> <b>Land Name:</b> {res?.land_id?.name}</p>
                      <p className="card-category"> <b>Location:</b> {res?.land_id?.location}</p>
                      <p className="card-category"> <b>Capacity:</b> {res?.land_id?.capacity}</p>
                      <p className="card-category"> <b>Feed:</b> {res?.feed}</p>
                      <p className="card-category"> <b>Labor:</b> {res?.labor}</p>
                      </div>
                    </div>
                    <div className="col-icon">
                      <div className="icon-primary" style={{position:"relative", bottom:"20px", left:"25px", color:"green", cursor:"pointer"}} onClick={() => {handleIsOpen(res?._id)}}>
                        <i className="fas fa-pen"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                height: "50vh",
                width: "50vw",
                textAlign: "center",
                alignContent: "center",
                fontSize: "20px",
              }}
            >
              No Resources to show. Please Add.
            </div>
          )}
        </div>
      </div>

      <button className="floating-button" onClick={handleIsOpen}>
        +
      </button>
    </div>
  );
};

export default ResourceManagement;
