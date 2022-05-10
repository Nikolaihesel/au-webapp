import Login from './Components/LogIn';
import Logo from './assets/autonomuosUnits_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

<img className="logo" src={Logo} height="70"/>


     <Login />
    </div>
  );
}

export default App;
