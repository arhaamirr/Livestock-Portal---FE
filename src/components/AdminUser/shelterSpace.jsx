import { useEffect, useState } from "react";
import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import "../../../src/css/addButton.css";
import resource from "../../assets/agriculture.svg"
import AddShelterSpaceModal from "./addShelterSpaceModal";
import { getShelterSpace } from "../../api/shelterSpaceApi";

const ShelterSpace = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [resourceId, setResourceId] = useState(null);
  const [data, setData] = useState([]);

  const handleIsOpen = ( id = null) => {
    setResourceId(id);
    setIsOpen((prev) => !prev);
  };
  useEffect(()=>{
    fetchSelterSpace();
  }, [isOpen])

  const fetchSelterSpace = async () =>{
    try
    {
        const shelterSpace = await getShelterSpace();
        console.log(shelterSpace,"shelterSpace")
        setData(shelterSpace)
    } catch(e){
        console.error(e);
    }
  }

  return (
    <div className="wrapper">
      <DashSidebar></DashSidebar>
      <DashNavbar></DashNavbar>
      {isOpen && <AddShelterSpaceModal isOpen={isOpen}  handleIsOpen={handleIsOpen} resourceId={resourceId}/> }
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
                        <img src={resource}></img>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                      <p className="card-category"> <b>LiveStock:</b> {res?.livestock_id?.type}</p>
                      <p className="card-category"> <b>Size in kg/lb:</b> {res?.size_in_kg}</p>
                      <p className="card-category"> <b>Ventilation:</b> {res?.ventilation}</p>
                      <p className="card-category"> <b>Animal Quantity:</b> {res?.animal_quantity}</p>
                      <p className="card-category"> <b>Available Shelter:</b> {res?.available_shelter}</p>
                      <p className="card-category"> <b>Shelter Type:</b> {res?.shelter_type}</p>
                      <p className="card-category"> <b>Resting Area:</b> {res?.resting_area}</p>
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

      <button className="floating-button" onClick={()=>{handleIsOpen(null)}}>
        +
      </button>
    </div>
  );
};

export default ShelterSpace;
