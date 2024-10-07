import { useEffect, useState } from "react";
import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import AddModal from "./addModal";
import "../../../src/css/addButton.css";
import { getResources } from "../../api/feedingRoutineApi";
import herhub from "../../assets/herhub2.png"

const ResourceManagement = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [resourceId, setResourceId] = useState(null);
  const [data, setData] = useState([]);

  const handleIsOpen = ( id = null) => {
    setResourceId(id);
    setIsOpen((prev) => !prev);
  };
  
  useEffect(()=>{
    fetchResources();
  }, [isOpen])

  const fetchResources = async () =>{
    try
    {
        const resources = await getResources();
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
      <div className="main-panel mt-5 mb-5">
        <div className="row align-content-center align-items-center justify-content-evenly">
          {data && data.length > 0 ? (
            data?.map((res) => (
              <div className="col-lg-3 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex h-100">
                  <div className="service-img">
                    <img className="img-fluid" src={herhub} alt="" />
                  </div>
                  <div className="service-text p-5 pt-0">
                    <p className="mb-1 mt-5"><b>Land Name:</b> {res?.land_id?.name}</p>
                    <p className="mb-1"><b>Location:</b> {res?.land_id?.location}</p>
                    <p className="mb-1"><b>Capacity:</b> {res?.land_id?.capacity}</p>
                    <p className="mb-1"><b>Feed:</b> {res?.feed}</p>
                    <p className="mb-1"><b>Labor:</b> {res?.labor}</p>
                  </div>
                  <div className="col-icon">
                      <div className="icon-primary" style={{position:"relative", top: "20px", bottom:"20px", left:"-30px", right: "30px", color:"green", cursor:"pointer"}} onClick={() => {handleIsOpen(res?._id)}}>
                        <i className="fas fa-pen"></i>
                      </div>
                    </div>
                </div>
              </div>
            )))
           : (
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

      <button className="floating-button" onClick={()=>{handleIsOpen(null)}}>
        +
      </button>
    </div>
  );
};

export default ResourceManagement;
