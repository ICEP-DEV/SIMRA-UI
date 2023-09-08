
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { Component }  from 'react';
function SanitaryInpection() {

    const [SanitaryInpectionItems, setSanitaryInpectionItems] = useState({
        pitLatrine: "",
        domesticAnimal: "",
        diaperDisposal:"",
        wasteWaterRelease:"",
        openDefaction:"",
        unprotectedWaterSource:"",
        agriculturalActivity:"",
        observerLaundryActivity:""
    });

    const [pitLatrine, setpitLatrine] = useState('')

    const handleChangeUpdate = e => {
        const { name, value } = e.target;
        setSanitaryInpectionItems(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function senduseSanitaryInpectionSurvey(){
        console.log(SanitaryInpectionItems)
    }

    return (
        <div className='sanitaryInpection'>
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Yes</th>
                            <th scope="col">No</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        <tr>
                            <th scope="row">1. Are There pit-latrines?</th>
                            <td><input type='radio' onChange={handleChangeUpdate} value='Yes' name='pitLatrine' /></td>
                            <td><input type='radio' onChange={handleChangeUpdate} value='No' name='pitLatrine' /></td>
                        </tr>
                        <tr>
                            <th scope="row">2. Are There any domestic animals observer?</th>
                            <td><input type='radio' onChange={handleChangeUpdate} value='Yes' name='domesticAnimal' /></td>
                            <td><input type='radio'  onChange={handleChangeUpdate} value='No' name='domesticAnimal' /></td>
                        </tr>
                        <tr>
                            <th scope="row">3. Diapers Disposal?</th>
                            <td><input type='radio' onChange={handleChangeUpdate} value='Yes' name='diaperDisposal' /></td>
                            <td><input type='radio' onChange={handleChangeUpdate} value='No' name='diaperDisposal' /></td>
                        </tr>
                        <tr>
                            <th scope="row">4. Release of wastewater?</th>
                            <td><input type='radio' onChange={handleChangeUpdate} value='Yes' name='wasteWaterRelease' /></td>
                            <td><input type='radio' onChange={handleChangeUpdate} value='No' name='wasteWaterRelease' /></td>
                        </tr>
                        <tr>
                            <th scope="row">5. Open defaction?</th>
                            <td><input type='radio' onChange={handleChangeUpdate} value='Yes' name='openDefaction' /></td>
                            <td><input type='radio' onChange={handleChangeUpdate} value='No' name='openDefaction' /></td>
                        </tr>
                        <tr>
                            <th scope="row">6. Is the water source unprotected?</th>
                            <td><input type='radio' onChange={handleChangeUpdate} value='Yes' name='unprotectedWaterSource' /></td>
                            <td><input type='radio' onChange={handleChangeUpdate} value='No' name='unprotectedWaterSource' /></td>
                        </tr>
                        <tr>
                            <th scope="row">7. Agricultural Activities?</th>
                            <td><input type='radio' onChange={handleChangeUpdate} value='Yes' name='agriculturalActivity' /></td>
                            <td><input type='radio' onChange={handleChangeUpdate} value='No' name='agriculturalActivity' /></td>
                        </tr>
                        <tr>
                            <th scope="row">8. Observer laundry Activities?</th>
                            <td><input type='radio' onChange={handleChangeUpdate} value='Yes' name='observerLaundryActivity' /></td>
                            <td><input type='radio' onChange={handleChangeUpdate} value='No' name='observerLaundryActivity' /></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={senduseSanitaryInpectionSurvey} className='btn btn-primary'>Submit</button>
            </div>
        </div>
    );
}

export default SanitaryInpection