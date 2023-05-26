import React from "react";
import array from "./array";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const index = array
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    array.splice(index, 1);
    navigate("/");
  };
  const setID = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  };
  return (
    <div>
      <Typography variant="h3">Home page</Typography>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>

              <td>
                <Link to={`/edit`} >
               <td> <Button onClick={()=>setID(item.id,item.Name,item.Age)}>
                  Update
                </Button></td>
                </Link>
                <Button variant="outlined" onClick={() => handleDelete(item.id)}>delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="d-grid gap-2" to='/create'>
                <Button variant="warning" size="lg">Create</Button>
            </Link>
    </div>
  );
};

export default Home;
