import Home from './Home'
import "../assets/login.scss"
import InputField from  './InputField'
import LoginForm from './LoginForm';
import { useEffect, useState } from "react"

import { useHistory, BrowserRouter as Router, Route, Switch } from 'react-router-dom';



export default function LoginPage() {

  const history = useHistory();
  const navigateTo = () => history.push('/home');


const adminUser = {
  email: "au@mail.com",
  password: "au123"

};

const [user, setUser] = useState({email: "", password:""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

  if(details.email == adminUser.email && details.password == adminUser.password) {
    console.log('logged in')
    setUser({
      name: details.name,
      email: details.email
    })
  } else {
    console.log('try again');
    setError("Forkert kode eller email")
  }
}

const Logout = () => {
  console.log("logout")
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
