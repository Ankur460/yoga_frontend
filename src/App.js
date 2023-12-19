
import './App.css';
import Enrollment from './components/Enrollment';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Registartion from './components/Registartion';
import {BrowserRouter ,Navigate,Route,Routes} from 'react-router-dom';
import { getToken } from './sevices/localStorage';

function App() {
  const token=getToken();
  return (
    <BrowserRouter>
    <div className="App">
       <NavBar/>
       <Routes>
        <Route path='*' element={!token?<Navigate to='/'/>:<Navigate to='/enrollments'/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/registration' element={token?<Navigate to='/enrollments'/>:<Registartion/>}/>
        <Route path='/login' element={token?<Navigate to='/enrollments'/>:<Login/>}/>
        <Route path='/enrollments' element={<Enrollment/>}/>
       </Routes>
       
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
