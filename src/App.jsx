import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm.jsx";
import Users from "./components/Users";


function App() {
  const [state, setState] = useState({
    users: [
      {
        name: "Uta James",
        email: "utajam@aol.com",
        gen: "20",
        id: "dfsdjkvnsdjkfnskf",
      },
      {
        name: "Chris Alton",
        email: "chrisal@aol.com",
        gen: "18",
        id: "45fsdsjkvnsdjkfnskf",
      },
      {
        name: "Berus Sama",
        email: "berus@aol.com",
        gen: "22",
        id: "weonbfjkvnwvnsdjkfnskf",
      },
    ],
  });

 const addNewUSer = (user) => {
    user.id = Math.random().toString();
    setState({
      users: [...state.users, user],
    });
  };
 const removeUser = (id) => {
    let undeletedusers = state.users.filter((user) => user.id !== id);
    setState({
      users: undeletedusers,
    });
  };
  const editUser = (id, updatedUser) => {
    setState({
      users: state.users.map((user) => (user.id === id ? updatedUser : user)),
    });
  };

  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col md="5" className='mb-2'>
            <AddUserForm addUser={addNewUSer} />
          </Col>
          <Col md='7'>
            <Users
              userData={state.users}
              removeUser={removeUser}
              editUser={editUser}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
