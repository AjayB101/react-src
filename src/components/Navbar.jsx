import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Pets } from "@mui/icons-material";
const MyToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          AJAY
        </Typography>
        <Pets sx={{display:{xs:'block',sm:'none'}}} />
      </MyToolbar>
    </AppBar>
  );
};
