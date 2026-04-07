
import { react, useEffect, useState } from 'react'

  

    const LoginStatus = (val) => {
          const [loggedIn, setLoggedIn] = useState(false)
useEffect(() => {

if(val.message == "Aditya Srivastava is here"){
    setLoggedIn(true)
}
else{
    setLoggedIn(false)
}
})
return (
    <div>
        {loggedIn ? <p>Logged In</p> : <p>Logged Out</p>}
    </div>)
}
        
        


export default LoginStatus