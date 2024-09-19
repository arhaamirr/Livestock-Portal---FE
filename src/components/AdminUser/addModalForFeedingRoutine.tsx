import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { getLiveStocks } from "../../api/feedingRoutineApi";
// import { addResource } from "../../api/feedingRoutineApi";

function AddModalForFeedingRoutine({ handleIsOPen, isOpen, feedingRoutineId }) {
  const [data, setData] = useState({
    live_stock: null,
    feeding_routine: null,
    feed_type: null,
    feed_amount: null,
  });
  const [livestock, setLiveStock] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value, "value");
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    getLiveStock();
  }, []);

  const getLiveStock = async () => {
    try {
      const resp = await getLiveStocks();
      setLiveStock(resp);
      console.log(resp, "Ddsfdsf");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitData = async () => {
    console.log("dsfdf");
    console.log(data);

    // try {
    //   const response = await addResource(data);
    //   console.log(response, "responseresponseresponse");
    // } catch (e) {
    //   console.log(e);
    //   toast.error("SOmething went wrong !!");
    // }
  };

  return (
    <>
      <Modal
        show={isOpen}
        onHide={handleIsOPen}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Feeding Routines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Live Stock</Form.Label>

              {livestock?.length > 0 && (
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleChange(e)}
                  value={data.live_stock}
                  name="live_stock"
                >
                  <option value="" disabled>
                    Choose Live Stock
                  </option>
                  {livestock.map((liv) => (
                    <option value={liv?._id}>{liv?.type}</option>
                  ))}
                </Form.Select>
              )}

              <Form.Label>Feeding Routine</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e)}
                value={data.feeding_routine}
                name="feeding_routine"
              >
                <option>Choose Feeding Routine</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Label>Feed Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e)}
                value={data.feed_type}
                name="feed_type"
              >
                <option>Choose Feeding Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Label className="mt-1">Feed Amount</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => handleChange(e)}
                value={data.feed_amount}
                name="feed_amount"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleIsOPen}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitData}>
            Save Routine
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModalForFeedingRoutine;
