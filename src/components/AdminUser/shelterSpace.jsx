import { useEffect, useState } from "react";
import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import "../../../src/css/addButton.css";
import herhub from "../../assets/herhub2.png"
import AddShelterSpaceModal from "./addShelterSpaceModal";
import { getShelterSpace } from "../../api/shelterSpaceApi";


const ShelterSpace = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [resourceId, setResourceId] = useState(null);
  const [data, setData] = useState([]);

  const handleIsOpen = (id = null) => {
    setResourceId(id);
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    fetchSelterSpace();
  }, [isOpen])

  const fetchSelterSpace = async () => {
    try {
      const shelterSpace = await getShelterSpace();
      console.log(shelterSpace, "shelterSpace")
      setData(shelterSpace)
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="wrapper">
      <DashSidebar></DashSidebar>
      <DashNavbar></DashNavbar>
      {isOpen && <AddShelterSpaceModal isOpen={isOpen} handleIsOpen={handleIsOpen} resourceId={resourceId} />}
      <div className="main-panel mt-5">
        <div className="row align-content-center align-items-center justify-content-evenly">
          {data && data.length > 0 ? (
            data?.map((res) => (

              <div className="col-lg-3 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex h-100">
                  <div className="service-img">
                    <img className="img-fluid" src={herhub} alt="" />
                  </div>
                  <div className="service-text p-5 pt-0">
                    <p className="mb-1 mt-5"><b>LiveStock:</b> {res?.livestock_id?.type}</p>
                    <p className="mb-1"><b>Size in kg/lb:</b> {res?.size_in_kg}</p>
                    <p className="mb-1"><b>Ventilation:</b> {res?.ventilation}</p>
                    <p className="mb-1"><b>Animal Quantity:</b> {res?.animal_quantity}</p>
                    <p className="mb-1"><b>Available Shelter:</b> {res?.available_shelter}</p>
                    <p className="mb-1"><b>Shelter Type:</b> {res?.shelter_type}</p>
                    <p className="mb-1"><b>Resting Area:</b> {res?.resting_area}</p>
                  </div>
                  <div className="col-icon">
                      <div className="icon-primary" style={{position:"relative", top:"20px", bottom:"20px", left:"55px", color:"green", cursor:"pointer"}} onClick={() => {handleIsOpen(res?._id)}}>
                        <i className="fas fa-pen"></i>
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

        <button className="floating-button" onClick={() => { handleIsOpen(null) }}>
          +
        </button>
      </div>
    </div>
  );
};

export default ShelterSpace;
