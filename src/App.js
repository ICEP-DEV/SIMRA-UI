import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Components/Auth/Login/Login';
//import RegisterForm from './Components/Auth/Registration/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
   
   <Route path='/' element={<Login/>}></Route>
  


    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
