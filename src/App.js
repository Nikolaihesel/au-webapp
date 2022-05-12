import Login from './Components/LogIn';
import Logo from './assets/autonomuosUnits_logo.png';
import Home from "./Components/Home"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
    <div className="App">

{/* <img className="logo" src={Logo} height="70"/> */}


    <Switch>

        <Route exact path="/home">
          <Home  />
          </Route>

          <Route>
        <Login  exact path="/login" />
        </Route>

     </Switch>
        
    </div>
    </Router>
  );
}

export default App;
