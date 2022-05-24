import LoginPage from './Components/LoginForm';
import Home from "./Components/Home"
import Logo from './assets/autonomuosUnits_logo.png';
import { useAuthContext } from './hooks/useAuthContext'
import './app.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {useState, useEffect} from 'react'
import { useLogout } from './hooks/useLogout';

function App() {
  const {authIsReady, user} = useAuthContext()
  const {logout} = useLogout();
  return (

    <div className="App">
{ <img className="logo" src={Logo} height="70"  onClick={logout}  /> }
{authIsReady && (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" >
      {!user && <Redirect to="/login" />}
      {user && <Home /> } 
    </Route>
     <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <LoginPage />}
            </Route>
  </Switch>
  </BrowserRouter>
)}
  
    </div>

  );
}

export default App;
