import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";
import {
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Box,
  ListItemAvatar,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Home, Notifications, SearchOutlined } from "@mui/icons-material";
const MyToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "#ffff",
});

const Search = styled("div")(({ theme }) => ({
  background: "#F4F4F4",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  marginRight:'200px',
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

const Appbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <Box>
      <AppBar sx={{ display: "flex" }} position="sticky">
        <MyToolbar disableGutters>
          <ListItem>
        
            <ListItemIcon>
              <Home sx={{ width: "34px", height: "38px" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h4" color="textPrimary" fontWeight="bold">
                  Square
                </Typography>
              }
            />
            <Search>
              <ListItem>
                <ListItemIcon>
                  <SearchOutlined />
                </ListItemIcon>
                <InputBase placeholder="Search" />
              </ListItem>
            </Search>

            <Icons
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Badge color="error" badgeContent={4} variant="dot">
                <Notifications
                  sx={{ color: "#808191", height: "20", width: "20" }}
                />
              </Badge>

              <ListItem>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography variant="h6" color="textPrimary">
                      Sanjay
                    </Typography>
                  }
                  secondary="Software Associate"
                />
              </ListItem>
            </Icons>
            <Iconsm onClick={(e) => settoggle(true)}>
              <Avatar sx={{ height: "40", width: "20" }} />
            </Iconsm>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={toggle}
              onClose={(e) => settoggle(false)}
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
          </ListItem>
        </MyToolbar>
      </AppBar>
    </Box>
  );
};
export default Appbar;
