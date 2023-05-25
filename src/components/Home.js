import React from "react";
import array from "./array";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const storedata = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  };
  const deleteData = (id) => {
    const index = array.map((item) => {
      return item.id;
      array.splice(index, 1);
      navigate("/");
    });
  };
  return (
    <div>
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
           
             <tr>
             <td key={item.id}>{item.Name}</td>
              <td key={item.id}>{item.Age}</td>
              <td><Button>Update</Button>
              <Button>delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
