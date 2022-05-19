import Home from './Home'
import "../assets/login.scss"
import InputField from  './InputField'
import LoginForm from './LoginForm';
import { useEffect, useState } from "react"

import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';



export default function LoginPage() {

  

const adminUser = {
  
  email : "au@mail.com",
  password: "au123"

};

const [user, setUser] = useState({email: "", password:""});
const [error, setError] = useState("");

const Login = details => {

  if(details.email == adminUser.email && details.password == adminUser.password) {
    setUser({
      // log ind
      name: details.name,
      email: details.email
    })
  } else {
    setError("Forkert kode eller email")
  }
}

const Logout = () => {
  // log ud
  setUser({email: "", password:""});
}


    return(



    <Router>

        <div className="flex-container-login">
        
        
        
        {(user.email != "") ? (
 <Switch>

   <Route>
     <Home exact path="/home" />
   </Route>
 </Switch>

       ) : (
         <LoginForm Login={Login} error={error} />
       )}

        </div>
</Router>

        
    )
}
