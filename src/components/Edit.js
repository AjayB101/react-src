import { TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import array from "./array";

function Edit() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  let index=array.map(item=>{
    return item.id
  }).indexOf(id)

  useEffect(() => {
    setid(localStorage.getItem("id"));
    setname(localStorage.getItem("name"));
    setage(localStorage.getItem("age"));
    
  }, []);

  const handleClick=()=>{
     let a=array[index]
     a.Name=name
     a.Age=age
    }
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Age"
          variant="outlined"
          onChange={(e) => setage(e.target.value)}
        />
        <br />
        <Link to={"/"}>
          {" "}
          <Button variant="contained" color="primary" onClick={handleClick} >
            update
          </Button>
        </Link>

        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
      </form>
    </div>
  );
}

export default Edit;
