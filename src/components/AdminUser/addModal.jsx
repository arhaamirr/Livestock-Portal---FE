import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { getShelters } from "../../api/feedingRoutineApi";

function AddModal({ handleIsOpen, isOpen }) {
  const [data, setData] = useState({
    resource: null,
    land: null,
    feed: null,
    labor: null,
  });

  const [shelters, setShelters] = useState([]);

  useEffect(()=>{
    initializeShelters();
  },[])

  const initializeShelters = async () => {
    try {
      const resp = await getShelters();
      setShelters(resp);
      console.log(resp,"resp")
    } catch(error) {

    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value, "value");
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitData = async () => {
    console.log(data);
    try {
      const response = await addResource(data);
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong !!");
    }
  };

  return (
    <>
      <Modal
        show={isOpen}
        onHide={handleIsOpen}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-1">Land</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e)}
                value={data.land}
                name="land"
              >
                <option value="" disabled>
                    Choose Land
                </option>
                {shelters?.map((sh) => (
                    <option value={sh?._id}>{sh?.name}</option>
                ))}
              </Form.Select>
              <Form.Label className="mt-1">Feed</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => handleChange(e)}
                value={data.feed}
                name="feed"
              />
              <Form.Label className="mt-1">Labor</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => handleChange(e)}
                value={data.labor}
                name="labor"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleIsOpen}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
