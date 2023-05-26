import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React material ui-Home";//for showing title in webpage
  }, []);
  return <div className="App"></div>;
}

export default App;
