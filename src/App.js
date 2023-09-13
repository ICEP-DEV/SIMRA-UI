import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Water from './components/Water';
import Sampling from './components/Sampling';
import Sanitation from './components/Sanitation';
import Micro from './components/Micro';
import Level1 from './components/Level1';
import Survey from './components/Survey';
import Test from './components/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm'


const App = () => {

  
  return (

    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Level1 />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Water' element={<Water />}></Route>
        <Route path='/Sampling' element={<Sampling />}></Route>
    
       
        <Route path='/Level' element={<Level1 />}></Route>
        <Route path='/Survey' element={<Survey />}></Route>
        
        <Route path='/Register' element={<RegisterForm />}></Route>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
    
