import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonGroup = () => {
    const navigate = useNavigate();

    const redirectTestPage = () => {
      
        navigate('/Test');
    }
    const redirectSurveyPage = () => {
      
        navigate('/Survey');
    }
    return (
        
        
        <div className='text-center'>
        <h2> Please choose either 1 or 2 </h2>
        
      <button onClick={redirectTestPage} class="btn btn-dark" type="button" >1. H2 TEST</button>
      <div className='mt-5'>
      <button onClick={redirectSurveyPage} class="btn btn-dark" type="button" >2. COMPLETE SURVEY</button>   
      </div>
    </div>
     
    );
};

export default ButtonGroup;
