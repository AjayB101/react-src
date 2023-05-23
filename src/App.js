import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Rightbar } from "./components/Rightbar";
import { Feedbar } from "./components/Feedbar";
import { Box, Stack } from "@mui/material";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar />
        <Feedbar />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
