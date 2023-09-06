import NavBar from './NavBar';
import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Survey from "./components/Survey";
import SuverySuccess from "./components/SurveySuccess"

function App() {
  return (
    <BrowserRouter>
    <Routes>
   
   <Route path='/' element={<Survey/>}></Route>
   <Route path='/signup' element={<SuverySuccess/>}></Route>


    </Routes>
    
    </BrowserRouter>


  );
}
export default App;