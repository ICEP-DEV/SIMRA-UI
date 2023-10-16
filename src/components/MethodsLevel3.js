import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function MethodsLevel3() {

    const navigate = useNavigate();
    const divStyleCetered = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
        flexDirection: 'column',
    }
    const divStyleCentered = {
        border: '2px solid grey',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    };

    const divStyleSubmit = {
        backgroundColor: 'Aqua',
        width: '200px',
        height: '50px',
        color: 'white',
        textAlign: 'center',

    };
    const Levelone = () => {
        navigate(`/Level1`);
    };
    return (
        <div className="survey">
            <h1 className="text-center">Methods</h1>

            <div className="text-center">
                <p className="text-danger">PLEASE FOLLOW THIS METHODS TO PURIFY WATER</p>
                <br></br>
                <h3>METHOD 1: Boiling water</h3>
                <li>Bring the water to a rolling boil and maintain it for at least one minute (three minutes at higher
                    altitudes). Allow the water to cool before use.</li>

                <h3>METHOD 2: SODIS (Solar Water Disinfection)</h3>
                <li>Fill clear, plastic bottles with water and leave them in direct sunlight for at
                    least six hours (or longer if it's cloudy). The UV radiation from the sun will help disinfect the water.</li>

                <h3>METHOD 3: Filtration</h3>
                <li>Choose a water filter certified for the removal of specific contaminants (e.g., use a cloth folded 8
                    times, clay pots, and ceramic filters).</li>

                <h3>METHOD 4: Chemical Disinfection</h3>
                <li>Chemicals like chlorine bleach can be used to disinfect water. Add a cap full of bleach
                    in 25L of water. Allow the treated water to sit for a specific contact time before consuming</li>

                <h3>METHOD 5: Ultraviolet (UV) Treatment</h3>
                <li>UV water purifiers use UV light to disinfect water by inactivating microorganisms.
                    Install a UV purifier according to the manufacturer's instructions and regularly replace the UV lamp if required.</li>

                <h3>METHOD 6: Distillation</h3>
                <li>Distillation involves boiling water and then collecting the condensed vapour. Collect the condensed
                    vapour in a clean container, leaving impurities behind.</li>

                <h3>METHOD 7:  Activated Carbon</h3>
                <li>Activated carbon filters can remove organic chemicals, chlorine, and bad tastes and odors
                    from water. Install and maintain an activated carbon filter according to the manufacturer's instructions.</li>

                <h3>METHOD 8:  Portable Water Purification Tablets</h3>
                <li>Use commercially available water purification tablets or drops
                    according to the instructions on the packaging. Allow the specified contact time before drinking the water.</li>


            </div>
            <div className="text-center">
                <Button
                    variant="outline-primary" style={{ width: '50%' }}
                    onClick={Levelone}
                >
                    Dashboard
                </Button></div>
        </div>
    );
}

export default MethodsLevel3;
