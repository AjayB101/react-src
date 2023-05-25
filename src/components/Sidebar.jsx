import { Box, Menu, Switch } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import DetailsIcon from '@mui/icons-material/Details';
import TaskIcon from '@mui/icons-material/Task';
import TableViewIcon from '@mui/icons-material/TableView';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const Sidebar = () => {
  return (
    <Box
    flex={1}
    p={2}
    sx={{
      display: { xs: "none", sm: "block" },
      backgroundColor: "#FCFCFC",
      width: "250px",
      height: '80vh',
    }}
  >
  
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="#smaple"
            sx={{ background: "#475BE8", borderRadius: "12px" }}
          >
            <ListItemIcon>
              <Home color="white" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "#FCFCFC" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#smaple">
            <ListItemIcon>
              <AccountCircleIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Employeedetails" sx={{color:'#808191'}} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#smaple">
            <ListItemIcon>
              <FormatAlignJustifyIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Employeeform" sx={{color:'#808191'}}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#smaple">
            <ListItemIcon>
              <TaskIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Taskform"  sx={{color:'#808191'}}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#smaple">
            <ListItemIcon>
              <TableViewIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Task table"  sx={{color:'#808191'}} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#smaple">
            <ListItemIcon>
              <PersonAddAltIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Adduser"  sx={{color:'#808191'}} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
export default Sidebar;
