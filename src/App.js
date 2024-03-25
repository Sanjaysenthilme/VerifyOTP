import './App.css';
// import NavBar from './Components/NavBar';
import Signup from './Components/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Verification from './Components/Verification';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/email-verify' element={<Verification/>}/>
        <Route path='/login-page' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
     {/* <Signup/> */}
    </div>
  );
}

export default App;
