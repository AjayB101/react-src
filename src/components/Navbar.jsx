import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";
import {
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";

const MyToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  background: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled("Icons")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Iconsm = styled("Icons")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          AJAY
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge color="error" badgeContent={4}>
            <Notifications />
          </Badge>
          <Badge color="error" badgeContent={4}>
            <Mail />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={(e)=>settoggle(true)}  />
        </Icons>
        <Iconsm onClick={(e)=>settoggle(true)} >
          <Avatar  />
        </Iconsm>
      </MyToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={toggle}
        onClose={(e)=>settoggle(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
