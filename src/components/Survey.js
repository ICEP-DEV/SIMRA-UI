
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { Component }  from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function SanitaryInpection() {
  

    const [activeMenu, setActiveMenu] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [completedProcessSanitarySurvey, setcompletedProcessSanitarySurvey] = useState('Completed 0/8');
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [showRiskLevel, setShowRiskLevel] = useState(false);
  const navigate = useNavigate();

   
  
  const [question1Answer, setQuestion1Answer] = useState('');
  const [question2Answer, setQuestion2Answer] = useState('');
  const [question3Answer, setQuestion3Answer] = useState('');
  const [question4Answer, setQuestion4Answer] = useState('');
  const [question5Answer, setQuestion5Answer] = useState('');
  const [question6Answer, setQuestion6Answer] = useState('');
  const [question7Answer, setQuestion7Answer] = useState('');
  const [question8Answer, setQuestion8Answer] = useState('');
  
  
  const divStyleCentered = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh', 
    flexDirection: 'column', 
  };
  
  const divStyle = {
    backgroundColor: 'black',
    width: '350px',
    height: '40px',
    color: 'white',
  };
  
  const divStyleSubmit = {
    backgroundColor: 'blue',
    width: '200px',
    height: '40px',
    color: 'white',
    textAlign: 'center',
  };
  
  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };
  
  
  const handleRadioChange = (event, questionNumber) => {
    const answer = event.target.value;
  
    switch (questionNumber) {
      case 1:
        setQuestion1Answer(answer);
        break;
      case 2:
        setQuestion2Answer(answer);
        break;
      case 3:
        setQuestion3Answer(answer);
        break;
      case 4:
        setQuestion4Answer(answer);
        break;
      case 5:
        setQuestion5Answer(answer);
        break;
      case 6:
        setQuestion6Answer(answer);
        break;
      case 7:
        setQuestion7Answer(answer);
        break;
      case 8:
        setQuestion8Answer(answer);
        break;
  
      default:
        break;
    }
  
    const totalYesOrNoCount = Object.values({
      question1Answer,
      question2Answer,
      question3Answer,
      question4Answer,
      question5Answer,
      question6Answer,
      question7Answer,
      question8Answer,
    }).filter((answer) => answer === 'Yes' || answer === 'No').length;
    setCompletedQuestions(totalYesOrNoCount);
    
    
  };
  
  
  
  const calculatePercentage = () => {
  const yesCount1 = question1Answer === 'Yes' ? 1 : 0;
  const yesCount2 = question2Answer === 'Yes' ? 1 : 0;
  const yesCount3 = question3Answer === 'Yes' ? 1 : 0;
  const yesCount4 = question4Answer === 'Yes' ? 1 : 0;
  const yesCount5 = question5Answer === 'Yes' ? 1 : 0;
  const yesCount6 = question6Answer === 'Yes' ? 1 : 0;
  const yesCount7 = question7Answer === 'Yes' ? 1 : 0;
  const yesCount8 = question8Answer === 'Yes' ? 1 : 0;
  
  const totalYesCount = yesCount1 + yesCount2 + yesCount3 + yesCount4 + yesCount5 + yesCount6 + yesCount7 + yesCount8;
  const totalQuestions = 8;
  const percentage = (totalYesCount / totalQuestions) * 100;
  
  return percentage.toFixed(2);
  };

  const percentage = calculatePercentage(); // Calculate the risk percentage
let riskLevelBlock = null; // Initialize the risk level block to null

if (percentage <= 25) {
  riskLevelBlock = (
    <div style={{ backgroundColor: 'green', padding: '5px' }}>
      <span style={{ color: 'black' }}>Low Risk</span>
    </div>
  );
} else if (percentage <= 50) {
  riskLevelBlock = (
    <div style={{ backgroundColor: 'yellow', padding: '5px' }}>
      <span style={{ color: 'black' }}>Medium Risk</span>
    </div>
  );
} else if (percentage <= 75) {
  riskLevelBlock = (
    <div style={{ backgroundColor: 'orange', padding: '5px' }}>
      <span style={{ color: 'black' }}>High Risk</span>
    </div>
  );
} else {
  riskLevelBlock = (
    <div style={{ backgroundColor: 'red', padding: '5px' }}>
      <span style={{ color: 'black' }}>Very High Risk</span>
    </div>
  );
}
  const handleFormSubmit = () => {
    setShowRiskLevel(true);
  };
  const showMethods = () => {
    setShowRiskLevel(true);
    navigate(`/Risk-Level`);
  };
  
  
  console.log('Percentage:', percentage);
  console.log('Risk Level:', riskLevelBlock);
  console.log('Show Risk Level:', showRiskLevel);
  
    return (
        
        
        <>
      <div className="survey" style={divStyleCentered} backgroundColor='white'>
        <div>Survey</div>
          <div className="menu-item" style={divStyle} onClick={() => handleMenuClick('sanitary')}>
            Sanitary Survey {completedProcessSanitarySurvey && <span style={{ marginLeft: '110px' }}>Completed {completedQuestions}/8</span>}
          </div>
          {activeMenu === 'sanitary' && (
            <div className="submenu">
  
              <table>
                <tr>
                  <th>Inspection form</th>
                  <th>Yes</th>
                  <th>No</th>
                </tr>
                <tr>
                  <td>1. Are there pit_atrined? </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="Yes"
                        name="Question1"
                        onChange={(event) => handleRadioChange(event, 1)}
                        checked={question1Answer === 'Yes'} /></label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="No"
                        name="Question1"
                        onChange={(event) => handleRadioChange(event, 1)}
                        checked={question1Answer === 'No'} /></label>
                  </td>
                </tr>
                <tr>
                  <td>2. Are there any domestic animals observed? </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="Yes"
                        name="Question2"
                        onChange={(event) => handleRadioChange(event, 2)}
                        checked={question2Answer === 'Yes'} /></label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="No"
                        name="Question2"
                        onChange={(event) => handleRadioChange(event, 2)}
                        checked={question2Answer === 'No'} /></label>
                  </td>
                </tr>
                <tr>
                  <td>3. Diapers disposal? </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="Yes"
                        name="Question3"
                        onChange={(event) => handleRadioChange(event, 3)}
                        checked={question3Answer === 'Yes'} /></label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="No"
                        name="Question3"
                        onChange={(event) => handleRadioChange(event, 3)}
                        checked={question3Answer === 'No'} /></label>
                  </td>
                </tr>
                <tr>
                  <td>4. Release of waste watre? </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="Yes"
                        name="Question4"
                        onChange={(event) => handleRadioChange(event, 4)}
                        checked={question4Answer === 'Yes'} /></label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="No"
                        name="Question4"
                        onChange={(event) => handleRadioChange(event, 4)}
                        checked={question4Answer === 'No'} /></label>
                  </td>
                </tr>
                <tr>
                  <td>5. Open defaecation? </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="Yes"
                        name="Question5"
                        onChange={(event) => handleRadioChange(event, 5)}
                        checked={question5Answer === 'Yes'} /></label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="No"
                        name="Question5"
                        onChange={(event) => handleRadioChange(event, 5)}
                        checked={question5Answer === 'No'} /></label>
                  </td>
                </tr>
                <tr>
                  <td>6. Is the water source unprotected? </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="Yes"
                        name="Question6"
                        onChange={(event) => handleRadioChange(event, 6)}
                        checked={question6Answer === 'Yes'} /></label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="No"
                        name="Question6"
                        onChange={(event) => handleRadioChange(event, 6)}
                        checked={question6Answer === 'No'} /></label>
                  </td>
                </tr>
                <tr>
                  <td>7. Agricultural activities? </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="Yes"
                        name="Question7"
                        onChange={(event) => handleRadioChange(event, 7)}
                        checked={question7Answer === 'Yes'} /></label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="No"
                        name="Question7"
                        onChange={(event) => handleRadioChange(event, 7)}
                        checked={question7Answer === 'No'} /></label>
                  </td>
                </tr>
                <tr>
                  <td>8. Observed laundry activities? </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="Yes"
                        name="Question8"
                        onChange={(event) => handleRadioChange(event, 8)}
                        checked={question8Answer === 'Yes'} /></label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="No"
                        name="Question8"
                        onChange={(event) => handleRadioChange(event, 8)}
                        checked={question8Answer === 'No'} />
                    </label>
                  </td>
                </tr>
              </table>
              
            </div>
          )}

<Popup trigger=
                {<button
                  type="button"
                  onClick={handleFormSubmit}
                  style={divStyleSubmit}
                >
                  Show Risk Level
                </button>}
                modal nested>
                {
                    close => (
                      <div>
                      Risk Level:
                      {riskLevelBlock}
                      <br></br>
                      <button
                    type="button"
                    onClick={showMethods}
                    style={divStyleSubmit}
                  >
                    SHOW METHODS
                  </button>
                    </div>
                    )
                }
            </Popup>
  

        </div></>
    );
  
  }

export default SanitaryInpection