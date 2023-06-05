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
const initialState = {
  name: "",
  address: "",
  contact: "",
  email: "",
};

function App() {
  const [data, setdata] = useState([]);
  const [state, setstate] = useState(initialState);
  const [userid, setuserid] = useState(null)
  const [editMode, seteditMode] = useState(false)
  const { name, address, contact, email } = state;
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const response = await axios.get(api);
    setdata(response.data);
    
  };
  const handleChange=(e)=>{
    let{name,value}=e.target
    setstate({...state,[name]:value})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    if(!name || !email ||!contact ||!address)
    toast.error("Please enter some values to continue")
    else{
      if(!editMode){

       await axios.post(api,state)
        toast.success("Data added successfully")
        setstate({name:"",email:"",contact:"",address:""})
        setTimeout(()=>loadData(),1000)
      }else{
       await axios.put(`${api}/${userid}`,state)
        toast.success("Data updtaed successfully")
        setstate({name:"",email:"",contact:"",address:""})
        setTimeout(()=>loadData(),1000)
        seteditMode(false)
        setuserid(null)
      }
    }
  }
  const handleDelete=async (id)=>{
    if(window.confirm("Are you sure you want to delete the data")){
      await axios.delete(`${api}/${id}`)
      toast.success("Data Deleted successfully")
      setTimeout(()=>loadData(),1000)
    }
  }
  const handleUpdate=(id)=>{
    const sinlgedata=data.find(item=>item.id===id)
    setstate({...sinlgedata})
    setuserid(id)
    seteditMode(true)
  }
 
  return (
    <div>
      <ToastContainer />
      <Navbar bg="primary" variant="dark" className="justify-content-center">
        <Navbar.Brand>This is react app CRUD using JSON server</Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleSubmit} >
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}> Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  value={address}
                  name="address"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}> Contact </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact"
                  value={contact}
                  name="contact"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}> Email </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit" variant="primary"  >{editMode?"update":"submit"}</Button>
            </Form>
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
                            onClick={()=>handleUpdate(item.id)}
                          >
                            update
                          </Button>
                          <Button
                            style={{ marginRight: "5px" }}
                            variant="danger"
                            onClick={()=>handleDelete(item.id)}
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
