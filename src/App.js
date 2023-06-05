import React, { useState, useEffect } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
  Navbar,
} from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const api = "http://localhost:5000/users";
const initialState={
  name:"",
  address:"",
  contact:"",
  email:"",

}
function App() {
  const [data, setdata] = useState([]);
  const [state, setstate] = useState(initialState)
  const{name,address,contact,email}=state
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const response = await axios.get(api);
    setdata(response.data);
  };
  return (
    <div>
      <ToastContainer />
      <Navbar bg="primary" variant="dark" className="justify-content-center">
        <Navbar.Brand>This is react app CRUD using JSON server</Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <h2>Form</h2>
          </Col>
          <Col md={8}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>name</th>
                  <th>address</th>
                  <th>contact</th>
                  <th>email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {data &&
                data.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.contact}</td>
                      <td>{item.email}</td>
                      <td>
                        <ButtonGroup>
                          <Button
                            style={{ marginRight: "5px" }}
                            variant="secondary"
                          >
                            update
                          </Button>
                          <Button
                            style={{ marginRight: "5px" }}
                            variant="danger"
                          >
                            delete
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
