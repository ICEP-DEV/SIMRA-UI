import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function RiskLevelPage({ showRiskLevel, riskLevelBlock }) {

    const navigate = useNavigate();
    const divStyleCetered = {
        display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh', 
    flexDirection: 'column', 
      }
      const divStyleCentered = {
        border: '2px solid Aqua',
        borderRadius: '10px', 
        justifyContent: 'center',
    alignItems: 'center',
        padding: '20px', // Optional: Add padding to the container
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
    <div className="survey" style={divStyleCentered}>
      <h1 className="text-center">Methods</h1>
     
       <div className="text-center">
                            <p className="text-danger">PLEASE FOLLOW THIS METHODS TO PURIFY WATER</p>

                            <table>
                                <tbody>
                                    <tr>
                                        <th>METHOD 1: Boiling water</th>
                                    </tr>
                                    <tr>
                                        <td>

                                            <li>The simplest method to purify water is to boil it for a good time.
                                                High temperatures cause the bacteria and virus to dissipate, removing all impurities from the water.
                                                In doing so, chemical additions cease to exist in the water. However, the dead micro-organisms and impurities settle at the bottom of the water,
                                                and boiling does not help eliminate all the impurities.
                                                You must strain the water through a microporous sieve to completely remove the impurities.</li>


                                        </td>
                                    </tr>
                                    <tr>
                                        <th>METHOD 2: Water Purifier</th>
                                    </tr>
                                    <tr>
                                        <td>

                                            <li>An electric water purifier is the most trusted form of water purification found in most houses today.
                                                A water purifier uses a multi-stage process involving UV and UF filtration, carbon block,
                                                and modern water filtration technology that eliminates most of the chemicals and impurities, making it the purest drinking water.</li>


                                        </td>
                                    </tr>
                                    <tr>
                                        <th>METHOD 3: Reverse Osmosis</th>
                                    </tr>
                                    <tr>
                                        <td>

                                            <li>An RO Purifier proves to be one of the best methods of purifying water.
                                                Reverse Osmosis forces water through a semipermeable membrane and removes contaminants.
                                                The TDS Controller and Mineraliser Technology, like the one found in an A. O. Smith RO UV Water Purifier,
                                                help retain the necessary nutrients while doing away with harmful impurities.</li>


                                        </td>
                                    </tr>
                                    <tr>
                                        <th>METHOD 4: Water Chlorination</th>
                                    </tr>
                                    <tr>
                                        <td>

                                            <li>It is an older technique used usually during an emergency, wherein a mild bleach with approximately 5% chlorine is added to the water.
                                                This mixture works as an oxidant and quickly kills microorganisms, making water safe for consumption.</li>


                                        </td>
                                    </tr>
                                    <tr>
                                        <th>METHOD 5: Distillation</th>
                                    </tr>
                                    <tr>
                                        <td>

                                            <li>Distillation is a water purification process involving collecting the condensed water after evaporation,
                                                ensuring that water is free of contaminants. However, this isn’t as effective as an RO filter because it is time-consuming and eliminates minerals.</li>


                                        </td>
                                    </tr>
                                    <tr>
                                        <th>METHOD 6: Iodine Addition</th>
                                    </tr>
                                    <tr>
                                        <td>

                                            <li>Iodine is a red chemical that is easily available as a tablet or a liquid. It is extremely powerful as it kills bacteria and viruses.
                                                However, it adds an unpleasant taste and can be fatal if taken in high doses.
                                                Therefore, it should only be used if you don’t have access to a better method of purification like an electric water purifier.</li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>METHOD 7:  Solar Purification</th>
                                    </tr>
                                    <tr>
                                        <td>

                                            <li>An RO Purifier proves to be one of the best methods of purifying water.
                                                Reverse Osmosis forces water through a semipermeable membrane and removes contaminants.
                                                The TDS Controller and Mineraliser Technology, like the one found in an A. O. Smith RO UV Water Purifier,
                                                help retain the necessary nutrients while doing away with harmful impurities.</li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>METHOD 8:  Clay Vessel Filtration</th>
                                    </tr>
                                    <tr>
                                        <td>

                                            <li>Way before people had access to an RO or UV Purifier, they used clay pots which purified muddy water,
                                                by blocking out the mud and allowing pure, potable water to pass through. This method is still used in some rural regions.</li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>METHOD 9: UV Radiation</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <li>Water is exposed to a UV Light that kills microorganisms, thereby preventing it from breeding further.
                                                But if not coupled with an RO Filter, UV Radiation alone cannot remove impurities and heavy metals.</li>

                                        </td>
                                    </tr>
                                    <tr>
                                        <th>METHOD 10: Desalination</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <li>This method is used when water with a certain level of salinity needs to be filtered. This process is helpful.</li>


                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                        <button
            type="button"
            onClick={Levelone}
            style={divStyleSubmit}
          >
            Dashboard
          </button>
    </div>
  );
}

export default RiskLevelPage;
