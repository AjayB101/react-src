import { Box, Menu, Switch } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home } from "@mui/icons-material";
import ModeNightIcon from '@mui/icons-material/ModeNight';
export const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
        backgroundColor: "whitesmoke",
      
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#smaple">
            <ListItemIcon>
              <Home color="white" />
            </ListItemIcon>
            <ListItemText primary="HomePage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#smaple">
            <ListItemIcon>
              <Home color="white" />
            </ListItemIcon>
            <ListItemText primary="pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#smaple">
            <ListItemIcon>
              <Home color="white" />
            </ListItemIcon>
            <ListItemText primary="Group" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#smaple">
            <ListItemIcon>
              <Home color="white" />
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#smaple">
            <ListItemIcon>
              <Home color="white" />
            </ListItemIcon>
            <ListItemText primary="HomePage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#smaple">
            <ListItemIcon>
           < ModeNightIcon />
            </ListItemIcon>
            <Switch />

          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );
};
