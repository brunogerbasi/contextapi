import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { LoginContext } from "./Contexts/LoginContext";
import { useState } from "react";


function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  
  return (
    <>
      <LoginContext.Provider value={{ username, setUsername}}>
        <Login />
        <Home />
      </LoginContext.Provider>
      
    </>
  );
}

export default App;
