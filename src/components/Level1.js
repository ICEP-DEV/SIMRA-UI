import React from 'react';
import { useNavigate } from 'react-router-dom';
import './level1.css';

const ButtonGroup = () => {
    const navigate = useNavigate();

    const redirectTestPage = () => {
      
        navigate('/Test');
    }
    const redirectSurveyPage = () => {
      
        navigate('/Survey');
    }

    const [activeMenu, setActiveMenu] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [completedProcessWaterSource, setcompletedProcessWaterSource] = useState('Completed 0/2');
  const [completedProcessSamplingData, setcompletedProcessSamplingData] = useState('Completed 0/1');
  const [completedProcessSanitarySurvey, setcompletedProcessSanitarySurvey] = useState('Completed 0/8');
  const [completedProcessH2S, setCompletedProcessH2S] = useState('Completed 0/1');
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [submenuCompletionCount, setSubmenuCompletionCount] = useState(0);



  const [question1Answer, setQuestion1Answer] = useState('');
  const [question2Answer, setQuestion2Answer] = useState('');
  const [question3Answer, setQuestion3Answer] = useState('');
  const [question4Answer, setQuestion4Answer] = useState('');
  const [question5Answer, setQuestion5Answer] = useState('');
  const [question6Answer, setQuestion6Answer] = useState('');
  const [question7Answer, setQuestion7Answer] = useState('');
  const [question8Answer, setQuestion8Answer] = useState('');

  const [isYellowTextVisible, setIsYellowTextVisible] = useState(false);
const [isBlackTextVisible, setIsBlackTextVisible] = useState(false);



const handleButtonClick = (color) => {
  if (color === 'Yellow') {
    setIsYellowTextVisible(!isYellowTextVisible);
    setCompletedProcessH2S('Completed 1/1');
    setIsBlackTextVisible(false);
  } else if (color === 'Black') {
    setIsBlackTextVisible(!isBlackTextVisible);
    setCompletedProcessH2S('Completed 1/1');
    setIsYellowTextVisible(false);
  }
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

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue !== 'Select') {
      setcompletedProcessWaterSource('Completed 1/2');
    } else {
      setcompletedProcessWaterSource('Completed 0/2');
    }
  };
  const handleOptionChange2 = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue !== 'Select') {
      setcompletedProcessWaterSource('Completed 2/2');
    } else {
      setcompletedProcessWaterSource('Completed 1/2');
    }
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
    return (
        
        
        <div className='text-center'>
        <h2> Please choose either 1 or 2 </h2>
        
      <button onClick={redirectTestPage} class="btn btn-dark" type="button" >1. H2 TEST</button>
      <div className='mt-5'>
      <button onClick={redirectSurveyPage} class="btn btn-dark" type="button" >2. COMPLETE SURVEY</button>   
      </div>
    </div>
     <div className="survey">
      <div className="menu-item" style={divStyle} onClick={() => handleMenuClick('water')}>
        Water Source {completedProcessWaterSource && <span style={{ marginLeft: '120px' }}>{completedProcessWaterSource}</span>}
      </div>
      {activeMenu === 'water' && (
        <div className="submenu1">


        <div className='th'> <tr>Types: </tr></div>
        <tr><td><ol  onChange={handleOptionChange} value={selectedOption}>
            
        <li> <input type="radio" id="test" name="test" value="River"></input>
      <label for="river">River</label></li>
      <li><input type="radio" id="dam" name="test" value="Dam"  ></input>
      <label for="dam">Dam</label></li>
      <li><input type="radio" id="borehole" name="test" value="Borehole"></input>
      <label for="borehole">Borehole</label></li>
          <li><input type="radio" id="dug" name="test" value="Dug_well" ></input>
          <label for="dug">Dug well</label></li>
      <li><input type="radio" id="tap" name="test" value="House_hold_tap_water"></input>
      <label for="tap">House hold tap water</label></li>
      <li><input type="radio" id="stored" name="test" value="House_hold_stored_water"></input>
      <label for="stored">House hold stored water</label></li>
      <li><input type="radio" id="waste" name="test" value="Wastewater_treatment_plant"></input>
      <label for="waste">Wastewater treatment plant</label></li>
      <li><input type="radio" id="water_plant" name="test" value="Water_treatment_plant"></input>
      <label for="water_plant">Water treatment plant</label></li>
      <li><input type="radio" id="other" name="test" value="Other"></input>
      <label for="other">Other</label></li>

          </ol></td>
        </tr>
        
   
    </div>
      )}
      <div>{activeMenu === 'water' && (
        <div className="submenu2">


<div className='th'> <tr>Water Accessibility: </tr></div>
            <tr><td><ol  onChange={handleOptionChange2} value={selectedOption}>
              
            <li> <input type="radio" id="easy" name="accessibility" value="easy"></input>
          <label for="easy">Easy</label></li>
        <li> <input type="radio" id="hard" name="accessibility" value="hard"></input>
          <label for="hard">Hard</label></li>
              
              </ol></td></tr></div>)}</div>

<br></br>
      <div className="menu-item" style={divStyle} onClick={() => handleMenuClick('sampling')}>
        Sampling Data {completedProcessSamplingData && <span style={{ marginLeft: '110px' }}>{completedProcessSamplingData}</span>}
      </div>
      {activeMenu === 'sampling' && (
        <div className="submenu">
          Data, preventing, app
        </div>
      )}
      <br></br>

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
                checked={question1Answer === 'Yes'}
              /></label>
          </td>
           <td>
            <label>
              <input
                type="radio"
                value="No"
                name="Question1"
                onChange={(event) => handleRadioChange(event, 1)}
                checked={question1Answer === 'No'}
              /></label>
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
                checked={question2Answer === 'Yes'}
              /></label>
          </td>
           <td>
            <label>
            <input
                type="radio"
                value="No"
                name="Question2"
                onChange={(event) => handleRadioChange(event, 2)}
                checked={question2Answer === 'No'}
            /></label>
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
                checked={question3Answer === 'Yes'}
              /></label>
          </td>
           <td>
            <label>
              <input
                type="radio"
                value="No"
                name="Question3"
                onChange={(event) => handleRadioChange(event, 3)}
                checked={question3Answer === 'No'}
              /></label>
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
                checked={question4Answer === 'Yes'}
              /></label>
          </td>
           <td>
            <label>
              <input
                type="radio"
                value="No"
                name="Question4"
                onChange={(event) => handleRadioChange(event, 4)}
                checked={question4Answer === 'No'}
              /></label>
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
                checked={question5Answer === 'Yes'}
              /></label>
          </td>
           <td>
            <label>
              <input
                type="radio"
                value="No"
                name="Question5"
                onChange={(event) => handleRadioChange(event, 5)}
                checked={question5Answer === 'No'}
              /></label>
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
                checked={question6Answer === 'Yes'}
              /></label>
          </td>
           <td>
            <label>
              <input
                type="radio"
                value="No"
                name="Question6"
                onChange={(event) => handleRadioChange(event, 6)}
                checked={question6Answer === 'No'}
              /></label>
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
                checked={question7Answer === 'Yes'}
              /></label>
          </td>
           <td>
            <label>
              <input
                type="radio"
                value="No"
                name="Question7"
                onChange={(event) => handleRadioChange(event, 7)}
                checked={question7Answer === 'No'}
              /></label>
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
                checked={question8Answer === 'Yes'}
              /></label>
          </td>
           <td>
            <label>
              <input
                type="radio"
                value="No"
                name="Question8"
                onChange={(event) => handleRadioChange(event, 8)}
                checked={question8Answer === 'No'}
              />
              </label>
          </td>
        </tr>
          </table>
          <div>
          {completedQuestions > 0 && (
            <div>
              Risk Level:
              {calculatePercentage() <= 25 && <span>Low Risk</span>}
              {calculatePercentage() > 25 && calculatePercentage() <= 50 && <span>Medium Risk</span>}
              {calculatePercentage() > 50 && calculatePercentage() <= 75 && <span>High Risk</span>}
              {calculatePercentage() > 75 && <span>Very High Risk</span>}
            </div>
          )}
        </div>
        </div>
      )}

<br></br>
<div className="menu-item" style={divStyle} onClick={() => handleMenuClick('h2s')}>
          H2S TEST {completedProcessH2S && <span style={{ marginLeft: '90px' }}>{completedProcessH2S}</span>}
      
      </div>
      {activeMenu === 'h2s' && (
        <div className="submenu" >
              <button
  className="yellow"
  id="yellow"
  name="test_color"
  value="YELLOW"
  color='black'
  onClick={() => handleButtonClick('Yellow')}
>
  WHITE
</button>

<button
  className="black"
  id="black"
  name="test_color"
  value="BLACK"
  onClick={() => handleButtonClick('Black')}
>
  Black
</button>
{isYellowTextVisible && (
  <div>
    <p>Absence of faecal contamination</p>
  </div>
)}

{isBlackTextVisible && (
  <div>
    <table>
        
        <div className='th'> <tr>METHOD 1: Boiling water</tr></div>
         <tr><td><ol>
             <li>Collect water and filter it with a cloth, towel, or water filter.</li>
             <li>Bring your water to a rolling boil for 1-3 minutes.</li>
             <li>Allow the water to cool and store it in covered containers</li>
           </ol></td>
         </tr>
         <div className='th'><tr> METHOD 2: Disinfecting Water with Chlorine Bleach</tr></div>
         <tr><td><ol>
             <li>Buy regular chlorine bleach labelled for water sanitation.</li>
             <li>Add clear water to a container.</li>
             <li>Use an eye dropper to add bleach to your water. The exact number of drops depends on the amount of water.</li>
             <li>Stir the bleach into the water and let it stand for 30 minutes. After 30 minutes, the water should have a slight chlorine smell. If it doesn’t, add the same quantity of bleach again, mix it in, and let the water sit for another 15 minutes. The water will be safe to drink.</li>
           </ol></td>
         </tr>
         <div className='th'><tr>METHOD 3: Using Sunlight to Purify Water </tr></div>
         <tr><td><ol>
             <li>Fill 4-5 clear plastic bottles with water. </li>
             <li>Shake the bottle to mix air into the water.</li>
             <li>Lay the bottles on their side in sunlight for 6-48 hours.</li>
             <li>After 6 hours in full sunlight (or 48 hours in cloudy weather), the water is safe to drink.</li>
           </ol></td>
         </tr>
         
         
     </table>
  </div>
)}      
        </div>
      )}
      <br></br>
        <button type="submit" value="Submit" style={divStyleSubmit}>SUBMIT</button>
    </div>
    );
};

export default ButtonGroup;
