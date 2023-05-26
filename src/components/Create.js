import { TextField, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Link, useNavigate } from "react-router-dom";
import array from "./array";

function Create() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setage("");
    setname("");
    let uuid = uuidv4();
    let uni = uuid.slice(0, 4);
    let a = name,
      b = age; //storeing the data in state to a var

    array.push({ id: uni, name: a, age: b });
    navigate("/");
  };
  return (
    <Container>
      <Typography variant="h3">Create </Typography>
      <form style={{ margin: "15rem" }}>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          spacing={2}
        >
          <Grid item>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </Grid>

          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            spacing={2}
          >
            <Grid item>
              <TextField
                id="Age-input"
                name="Age"
                label="Age"
                type="text"
                onChange={(e) => setage(e.target.value)}
                value={age}
              />
            </Grid>
            <Button
              fullWidth
              variant="contained"
              onClick={(e) => handleClick(e)}
            >
              Submit
            </Button>
            <Link to={'/'}>
            <Button fullWidth variant="outlined">
              Home
            </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Create;
