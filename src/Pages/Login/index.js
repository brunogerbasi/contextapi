import React, {useState} from "react";

function Login() {
    const [setUsername, setShowProfile] = useContext(LoginContext);
    //const [username, setUsername] = useState("");
    const [userPass, setUserPass] = useState("");

    return (
      <>
        <div>
            <label HtmlFor="email">E-mail</label><br />
            <input 
                type="email" 
                name="email" 
                id="email" 
                // className="input-validate" 
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
        </div>
        <div>
        <label htmlFor="password">Password</label><br />
        <input 
            type="password" 
            name="password" 
            id="password" 
            onChange={(event) => {
                setUserPass(event.target.value)
            }}
        />
        </div>
        <br />
        <div>
            <button onClick={() => {setShowProfile(true)}}>Entrar</button>
        </div>
      
      </>
    );
  }
  
  export default Login;
  