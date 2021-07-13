import React, {useState} from "react";

function Login() {
    const [username, setUsername] = useState("");
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
            <button>Entrar</button>
        </div>
      
      </>
    );
  }
  
  export default Login;
  