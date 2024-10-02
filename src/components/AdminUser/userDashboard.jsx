import { useEffect, useState } from "react";
import "../../../src/css/addButton.css";
import resource from "../../assets/agriculture.svg"
import AddShelterSpaceModal from "./addShelterSpaceModal";
import { getUserPurchases, deletePurchasedItem } from "../../api/userDashboardApi";
import PurchaseItemsModal from "./addModalforPurchasingItem";
import { toast } from "react-toastify";

const UserDashboard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [resourceId, setResourceId] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchUserPurchases();
    }, [isOpen])

    const handleIsOpen = ( id = null) => {
        setResourceId(id);
        setIsOpen((prev) => !prev);
      };

    const fetchUserPurchases = async () => {
        try {
            const userPurchasedItems = await getUserPurchases();
            setData(userPurchasedItems?.animal)
        } catch (e) {
            console.error(e);
        }
    }

    const handleDelete = async (id) => {
        try {
            const deleteItem = await deletePurchasedItem(id);
            if(deleteItem.deleted == 1) {
               setData(data.filter(res => res._id != id));
               toast.success(deleteItem.message);
            }
            else {
                toast.error(deleteItem.message);
            }
        }
        catch(error) {
            toast.error(error.message);
            console.log(error, "error")
        }
    }

    return (
        <div>
            {isOpen && <PurchaseItemsModal isOpen={isOpen} handleIsOpen={handleIsOpen} resourceId={resourceId} />}
            <div className=" mt-5">
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
                                                <p className="card-category"> <b>Livestock:</b> {res?.shelterspace_id?.livestock_id?.type}</p>
                                                <p className="card-category"> <b>Size in kg/lb:</b> {res?.shelterspace_id?.size_in_kg}</p>
                                                <p className="card-category"> <b>Ventilation:</b> {res?.shelterspace_id?.ventilation}</p>
                                                <p className="card-category"> <b>Animal Quantity:</b> {res?.shelterspace_id?.animal_quantity}</p>
                                                <p className="card-category"> <b>Available Shelter:</b> {res?.shelterspace_id?.available_shelter}</p>
                                                <p className="card-category"> <b>Shelter Type:</b> {res?.shelterspace_id?.shelter_type}</p>
                                                <p className="card-category"> <b>Resting Area:</b> {res?.shelterspace_id?.resting_area}</p>
                                            </div>
                                        </div>
                                        <div className="col-icon">
                                            <div className="icon-primary" style={{ position: "relative", bottom: "20px", left: "25px", color: "red", cursor: "pointer" }} onClick={() => { handleDelete(res?._id) }}>
                                                <i className="fas fa-trash"></i>
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
                            Nothing Purchased.
                        </div>
                    )}
                </div>
            </div>

            <button className="floating-button" onClick={() => { handleIsOpen(null) }}>
                +
            </button>
        </div>
    );
};

export default UserDashboard;
