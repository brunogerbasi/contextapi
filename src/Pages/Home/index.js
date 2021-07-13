import React, {useState} from 'react'
import {LoginContext} from '../../Contexts/LoginContext';
import Profile from '../../Components/Profile';

function Home() {

    const [showProfile, setShowProfile] = useState(false);
    const [username, setUsername] = useState("");


    return (
      <>
        <LoginContext.Provider value={{ username, setUsername, setShowProfile}}>
            <h3>Olá, 
            <span>
                {
                    showProfile &&
                    <Profile />
                }
            </span> 
            </h3>
        </LoginContext.Provider>
      </>
    );
  }
  
  export default Home;
  