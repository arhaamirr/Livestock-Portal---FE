import { useEffect, useState } from "react";
import DashSidebar from "./dashSidebar";
import DashNavbar from "./dashNavbar";
import "../../../src/css/addButton.css";
import AddModalForFeedingRoutine from "./addModalForFeedingRoutine";
import { getFeedingRoutines } from "../../api/feedingRoutineApi";
import { formatDate } from "../../util/getFormatedDateAndTIme";
import herhub from "../../assets/herhub2.png"

const FeedingRoutine = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedingRoutineId, setFeedingRoutineId] = useState();
  const [data, setData] = useState([]);

  const handleIsOPen = (id = null) => {
    setFeedingRoutineId(id);
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    fetchFeedingRoutines();
  }, [isOpen])

  const fetchFeedingRoutines = async () => {
    try {
      const response = await getFeedingRoutines();
      setData(response)
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="wrapper">
      <DashSidebar></DashSidebar>
      <DashNavbar></DashNavbar>
      {isOpen && <AddModalForFeedingRoutine isOpen={isOpen} handleIsOPen={handleIsOPen} feedingRoutineId={feedingRoutineId} />}
      <div className="main-panel mt-5">
        <div className="row align-content-center align-items-center justify-content-evenly">
          {data && data.length > 0 ? (
            data?.map((feed) => (
              <div className="col-lg-3 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex h-100">
                  <div className="service-img">
                    <img className="img-fluid" src={herhub} alt="" />
                  </div>
                  <div className="service-text p-5 pt-0">
                    <p className="mb-1 mt-5"><b >Type:</b> {feed?.livestock_id?.type}</p>
                    <p className="mb-1"> <b>Quantity:</b> {feed?.quantity}</p>
                    <p className="mb-1"><b>Feed Type:</b> {feed?.feed_type}</p>
                    <p className="mb-1"> <b>Routine:</b> {formatDate(feed?.feeding_time)}</p>
                  </div>
                  <div className="col-icon">
                    <div className="icon-primary " style={{ position: "relative", top: "10px", bottom: "20px", left: "-20px", color: "green", cursor: "pointer" }} onClick={() => { handleIsOPen(feed?._id) }}>
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
              No Feeding Routines to show. Please Add.
            </div>
          )}
        </div>
      </div>

      <button className="floating-button" onClick={() => { handleIsOPen(null) }} >
        +
      </button>
    </div>
  );
};

export default FeedingRoutine;
