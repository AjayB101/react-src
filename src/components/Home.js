import React from "react";
import array from "./array";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const storedata = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  };
  const handleDelete = (id) => {
    const index = array
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    array.splice(index, 1);
    navigate("/");
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
                <button>Update</button>
                <Button onClick={() => handleDelete(item.id)}>delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
