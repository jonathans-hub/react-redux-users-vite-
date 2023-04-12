import { Card, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import EditUserForm from "./EditUserForm";
import '../App.css'
export default function User(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    props.removeUser(props.userInfo.id);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Col lg='4' md="6" sm='6' xs="7" style={{ marginBottom: "2rem"}}>
        <Card  className="h-100">
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              CodeTrain User
            </Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>Email:{props.userInfo.email}</Card.Text>
            <Card.Text>Gen:{props.userInfo.gen}</Card.Text>
            <div className="d-flex flex-row" >
              <Button
                variant="primary"
                size="sm"
                onClick={handleShow}
                style={{ width: "60px" }}
              >
                Edit
              </Button>
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
