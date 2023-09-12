import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Test from './components/Test';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  
  return (

    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Test />}></Route>
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
    
