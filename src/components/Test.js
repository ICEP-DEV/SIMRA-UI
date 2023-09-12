import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Test.css';
import { useState } from 'react';

const ButtonGroup = () => {
    const navigate = useNavigate();

    const redirectTestPage = () => {

        navigate('/Test');
    }
    const [activeMenu, setActiveMenu] = useState(null);

    const [completedProcessH2S, setCompletedProcessH2S] = useState('Completed 0/1');

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
    const handleSubmitButtom = (submit) =>{
        


    }




    return (


        <><div className='text-center mt-4' >

            {activeMenu === 'sanitary' && (
                <div className="submenu">

                </div>
            )}

            <br></br>
            <p> Please complete H2Test </p>
            
            <div className='d-inline p-2 bg-dark text-white mt-5' onClick={() => handleMenuClick('h2s')}>
                H2S TEST {completedProcessH2S && <span style={{ marginLeft: '90px' }}>{completedProcessH2S}</span>}

            </div>
            {activeMenu === 'h2s' && (
                <div className='text-center mt-5'>
                    <button
                        className="p-3 mb-2 bg-light text-dark "
                        id="yellow"
                        name="test_color"
                        value="YELLOW"
                        onClick={() => handleButtonClick('Yellow')}>NEGATIVE
                    </button>

                    <button
                        className="p-3 mb-2 bg-dark text-white"
                        id="black"
                        name="test_color"
                        value="BLACK"
                        onClick={() => handleButtonClick('Black')}>POSITIVE
                    </button>
                    {isYellowTextVisible && (
                        <div>
                            <p >ENJOY YOUR WATER!!</p>
                            <p>WATER IS CLEAN, THERE IS NO FAECAL CONTAMINATION</p>
                        </div>
                    )}

                    {isBlackTextVisible && (
                        <div>
                            <table >
                                <p class="text-danger">WATER IS NOT CLEAN!! PLEASE FOLLOW THE STEPS BELLOW : </p>

                                <div className="p-3 mb-2 bg-secondary text-white"><p> METHOD 1 : Boiling water</p></div>
                                <tr><td>
                                    <li>Collect water and filter it with a cloth, towel, or water filter.</li>
                                    <li>Bring your water to a rolling boil for 1-3 minutes.</li>
                                    <li>Allow the water to cool and store it in covered containers</li>
                                    <p></p>
                                </td>
                                </tr>
                                <div className='p-3 mb-2 bg-secondary text-white'> <p>METHOD 2 : Disinfecting Water with Chlorine Bleach</p></div>
                                <tr><td>
                                    <li>Buy regular chlorine bleach labelled for water sanitation.</li>
                                    <li>Add clear water to a container.</li>
                                    <li>Use an eye dropper to add bleach to your water. The exact number of drops depends on the amount of water.</li>
                                    <li>Stir the bleach into the water and let it stand for 30 minutes. After 30 minutes, the water should have a slight chlorine smell. If it doesn’t, add the same quantity of bleach again, mix it in, and let the water sit for another 15 minutes. The water will be safe to drink.</li>
                                    <p></p>
                                </td>
                                </tr>
                                <div className='p-3 mb-2 bg-secondary text-white'><p>METHOD 3 : Using Sunlight to Purify Water </p></div>
                                <tr><td>
                                    <li>Fill 4-5 clear plastic bottles with water. </li>
                                    <li>Shake the bottle to mix air into the water.</li>
                                    <li>Lay the bottles on their side in sunlight for 6-48 hours.</li>
                                    <li>After 6 hours in full sunlight (or 48 hours in cloudy weather), the water is safe to drink.</li>
                                </td>
                                </tr>


                            </table>
                        </div>
                    )}
                </div>
            )}
            <br></br>
            <button onClick={handleSubmitButtom} className='d-inline p-2 bg-primary text-white mt-5' type="submit" value="Submit" style={divStyleSubmit}>SUBMIT</button>
        </div></>
    );
};

export default ButtonGroup;