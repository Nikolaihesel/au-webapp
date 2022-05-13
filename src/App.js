import LoginPage from './Components/LogIn';
import Logo from './assets/autonomuosUnits_logo.png';
import Home from "./Components/Home"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react'

function App() {
  
  

  return (

    



    <Router>

      {/* <div className="trip-list">

      <h2>user info</h2>
      <ul>
        {user.map(user => (
          <li key={user.id}>
            <h3>{user.email}</h3>
            <p>{user.password}</p>
          </li>
        ))}
      </ul>
    </div> */}


      

    <div className="App">

 <img className="logo" src={Logo} height="70"/> 





    <Switch>

        <Route exact path="/home">
          <Home  />
          </Route>

          <Route>
        <LoginPage  exact path="/login" />
        </Route>

     </Switch>
        
    </div>
    </Router>
  );
}

export default App;
