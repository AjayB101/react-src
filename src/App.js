import { Stack } from "@mui/material";
import "./App.css";
import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
import { Dashboard } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
       <Appbar />
      <Stack>
        <Sidebar />
        <Dashboard />
      </Stack>
     
    </div>
  );
}

export default App;
