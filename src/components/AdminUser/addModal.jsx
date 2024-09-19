import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
// import { addResource } from "../../api/feedingRoutineApi";

function AddModal({ handleIsOPen, isOpen }) {
  const [data, setData] = useState({
    resource: null,
    land: null,
    feed: null,
    labor: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value, "value");
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmitData = async () => {
    console.log("dsfdf");
    console.log(data);

    try {
      const response = await addResource(data);
      console.log(response, "responseresponseresponse");
    } catch (e) {
      console.log(e);
      toast.error("SOmething went wrong !!");
    }
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>Resources
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e)}
                value={data.resource}
                name="resource"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Label className="mt-1">Land</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e)}
                value={data.land}
                name="land"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
          <Button variant="secondary" onClick={handleIsOPen}>
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
