import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
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
=======
>>>>>>> main



const HomePage = () => {

  
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Water' element={<Water />}></Route>
        <Route path='/Sampling' element={<Sampling />}></Route>
        <Route path='/Sanitation' element={<Sanitation />}></Route>
        <Route path='/Micro' element={<Micro />}></Route>
        <Route path='/Level' element={<Level1 />}></Route>
        <Route path='/Survey' element={<Survey />}></Route>
        <Route path='/Test' element={<Test />}></Route>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
=======


    
    <div className="homepage">
    
      <main>
        <section id="home">
          <h1>Welcome to SIMRA</h1>
          <p>Explore, Connect, Learn Water Safety Plans (WSP) and Sanitation Safety Plans (SSP).</p>
        </section>
        
        <div className="login-signup"> 
          <button>Get Started</button>
          
  
        </div>
         
        
      </main>
    </div>
  );
};

export default HomePage;
>>>>>>> main
