import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm.jsx";
import Users from "./components/Users";
import { addUser, removeUser, editUser } from "./actions/userActions.jsx";

export function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const addNewUSer = (user) => {
    dispatch(addUser(user))
  };
  const removeUSer = (id) => {
    dispatch(removeUser(id))
  };
  const editUSer = (id, updatedUser) => {
    dispatch(editUser(id, updatedUser))
  };

  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col md="5" className="mb-2">
            <AddUserForm addUser={addNewUSer} />
          </Col>
          <Col md="7">
            <Users
              userData={users}
              removeUser={removeUSer}
              editUser={editUSer}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
