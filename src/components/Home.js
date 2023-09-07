import React from 'react';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';

const ButtonGroup = () => {

    const navigate = useNavigate();

    const redirectToOtherPage = () => {
      
      navigate('/Water');
    };
    const redirectSamplingPage = () => {
      
        navigate('/Sampling');
    };
    const redirectSanitationPage = () => {
      
        navigate('/Sanitation');
    };
    const redirectMicroPage = () => {
      
        navigate('/Micro');
    }
    const redirectLevelPage = () => {
      
        navigate('/Level');
    }
    return (
        <div class="d-grid gap-3">
            <button onClick={redirectToOtherPage} class="btn btn-dark" type="button" >WATER SOURCE</button>
            <button onClick={redirectSamplingPage} class="btn btn-dark" type="button">SAMPLING DATA</button>
            <button onClick={redirectSanitationPage} class="btn btn-dark" type="button">SANITATION DATA</button>
            <button onClick={redirectMicroPage} class="btn btn-dark" type="button">MICROBIAL DATA</button>
        
        <div className='text-center'>
        <h2> Please click the button bellow to access level 1 </h2>
        <div className='mt-5'>
      <button onClick={redirectLevelPage} class="btn btn-dark" type="button" >LEVEL 1</button>
         
      </div>
    </div>

        </div>
     
    );
};

export default ButtonGroup;
