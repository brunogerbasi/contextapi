import React, {useContext} from 'react'

import { LoginContext } from "Contexts/LoginContext"

function Profile(){
    const { username } = useContext(LoginContext);
    
    return(
        <>            
            {username}
        </>
    );
}

export default Profile;