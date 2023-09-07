import React, { useState } from 'react';
//import './Survey.css';
function Questionnaire() {
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
  });

  const handleRadioChange = (event, question) => {
    setAnswers({
      ...answers,
      [question]: event.target.value,
    });
  };

  return (
    
    <div className="container mt-5 ">
      <h2>Survey inspection form</h2>

      <div className="mb-4">
        <p> 1. Are they pit-latrines? </p>
        <div className="form-check">
          <input type="radio"className="form-check-input"id="q1-option1"value="Yes"
            checked={answers.question1 === 'Yes'}
            onChange={(e) => handleRadioChange(e, 'question1')}/>
          <label className="form-check-label" htmlFor="q1-option1"> YES</label>
        </div>

        <div className="form-check">
          <input type="radio"className="form-check-input"id="q1-option2"value="No"
            checked={answers.question1 === 'No'}
            onChange={(e) => handleRadioChange(e, 'question1')}/>
          <label className="form-check-label" htmlFor="q1-option2"> No</label>
        </div>
      </div>

      <div className="mb-4">
        <p>2. Are they any domestic animals observed ?</p>
        <div className="form-check">
          <input type="radio"className="form-check-input"id="q2-option1"value="Yes"
            checked={answers.question2 === 'Yes'}
            onChange={(e) => handleRadioChange(e, 'question2')}/>
        <label className="form-check-label" htmlFor="q2-option1"> YES</label>
        </div>

        <div className="form-check">
          <input type="radio"className="form-check-input"id="q2-option2"value="No"
            checked={answers.question2 === 'No'}
            onChange={(e) => handleRadioChange(e, 'question2')}/>
          <label className="form-check-label" htmlFor="q2-option2"> NO</label>
        </div>
        
      </div>

      <div className="mb-4">
        <p>3. Diapers disposal ?</p>
        <div className="form-check">
          <input type="radio"className="form-check-input"id="q3-option1"value="Yes"
            checked={answers.question3 === 'Yes'}
            onChange={(e) => handleRadioChange(e, 'question3')}/>
          <label className="form-check-label" htmlFor="q3-option1">YES</label>
        </div>

        <div className="form-check">
          <input
            type="radio"className="form-check-input"id="q3-option2"value="No"
            checked={answers.question3 === 'No'}
            onChange={(e) => handleRadioChange(e, 'question3')}/>
          <label className="form-check-label" htmlFor="q3-option2"> NO</label>
        </div>       
      </div>

      <div className="mb-4">
        <p>4. Release of wastewater ?</p>

        <div className="form-check">
          <input
            type="radio"className="form-check-input"id="q4-option1"value="Yes"
            checked={answers.question4 === 'Yes'}
            onChange={(e) => handleRadioChange(e, 'question4')}/>
          <label className="form-check-label" htmlFor="q4-option1">YES</label>
        </div>

        <div className="form-check">
          <input
            type="radio"className="form-check-input"id="q4-option2"value="No"
            checked={answers.question4 === 'No'}
            onChange={(e) => handleRadioChange(e, 'question4')}/>
          <label className="form-check-label" htmlFor="q4-option2">NO</label>
        </div>       
      </div>

      <div className="mb-4">
        <p>5. Open defeacation ?</p>

        <div className="form-check">
          <input type="radio"className="form-check-input"id="q5-option1"value="Yes"
            checked={answers.question5 === 'Yes'}
            onChange={(e) => handleRadioChange(e, 'question5')}/>
          <label className="form-check-label" htmlFor="q5-option1">YES</label>
        </div>

        <div className="form-check">
          <input
            type="radio"className="form-check-input"id="q5-option2"value="No"
            checked={answers.question5 === 'No'}
            onChange={(e) => handleRadioChange(e, 'question5')}/>
          <label className="form-check-label" htmlFor="q5-option2">NO</label>
        </div>
        
      </div>
      <div className="mb-4">
        <p>6. I s the water source unprotected ?</p>

        <div className="form-check">
          <input
            type="radio"className="form-check-input" id="q6-option1"value="Yes"
            checked={answers.question6 === 'Yes'}
            onChange={(e) => handleRadioChange(e, 'question6')}/>
          <label className="form-check-label" htmlFor="q6-option1">YES</label>
        </div>

        <div className="form-check">
          <input
            type="radio"className="form-check-input"id="q6-option2"value="No"
            checked={answers.question6 === 'No'}
            onChange={(e) => handleRadioChange(e, 'question6')}/>
          <label className="form-check-label" htmlFor="q6-option2">NO</label>
        </div>
        
      </div>
      <div className="mb-4">
        <p>7. Agricultural activties ?</p>

        <div className="form-check">
          <input
            type="radio"className="form-check-input"id="q7-option1"value="Yes"
            checked={answers.question7 === 'Yes'}
            onChange={(e) => handleRadioChange(e, 'question7')}/>
          <label className="form-check-label" htmlFor="q7-option1">YES</label>
        </div>

        <div className="form-check">
          <input
            type="radio"className="form-check-input"id="q7-option2"value="No"
            checked={answers.question7 === 'No'}
            onChange={(e) => handleRadioChange(e, 'question7')}/>
          <label className="form-check-label" htmlFor="q7-option2">NO</label>
        </div>
        
      </div>
      <div className="mb-4">
        <p>8. Observal laundry activties ?</p>

        <div className="form-check">
          <input
            type="radio"className="form-check-input"id="q8-option1"value="Yes"
            checked={answers.question8 === 'Yes'}
            onChange={(e) => handleRadioChange(e, 'question8')}/>
          <label className="form-check-label" htmlFor="q8-option1">YES</label>
        </div>

        <div className="form-check">
          <input
            type="radio"className="form-check-input"id="q8-option2"value="No"
            checked={answers.question8 === 'No'}
            onChange={(e) => handleRadioChange(e, 'question8')}/>
          <label className="form-check-label" htmlFor="q8-option2">NO</label>
        </div>
        
      </div>

      <button className="btn btn-primary" >
        Submit
      </button>

    </div>
  );
}

export default Questionnaire;
