import LoginPage from './Components/LoginForm';
import Home from "./Components/Home"
import Logo from './assets/autonomuosUnits_logo.png';
import { useAuthContext } from './hooks/useAuthContext'
import './app.scss';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useLogout } from './hooks/useLogout';



function App() {

  const stopRefresh = (e) => {
    e.preventDefault();
  }

  const {authIsReady, user} = useAuthContext()
  const {logout} = useLogout();
  return (

    <div className="App" onChange={stopRefresh}>
{ <img className="logo" src={Logo} height="70"  onClick={logout}  /> }
{authIsReady && (
  <HashRouter>
  <Switch>
    <Route exact path="/" >
      {!user && <Redirect to="/login"  component={LoginPage}/>}
      {user && <Home component={Home} />  } 
    </Route>
     <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <LoginPage />}
            </Route>
  </Switch>
  </HashRouter>
)}
  
    </div>

  );
}

export default App;
