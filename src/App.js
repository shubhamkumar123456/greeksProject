
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
