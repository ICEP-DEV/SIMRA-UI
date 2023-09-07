import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Menu() {
    const navigate = useNavigate();

    const redirectToOtherPage = () => {
      
      navigate('/Home');
    };
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (eventKey) => {
        setSelectedValue(eventKey);
      };

  return (
    <div className="text-center"> 
      <Dropdown onSelect={handleSelect}>
        <h3>PLEASE CHOOSE WATER SOURCE BELOW</h3>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          WATER SOURCE
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#Rivers">Rivers</Dropdown.Item>
          <Dropdown.Item href="#Dams">Dams</Dropdown.Item>
          <Dropdown.Item href="#Springs">Springs</Dropdown.Item>
          <Dropdown.Item href="#Dog Well">Dog Well</Dropdown.Item>
          <Dropdown.Item href="#Household's Tap Water">Household's Tap Water</Dropdown.Item>
          <Dropdown.Item href="#Household's Stored Water">Household's Stored Water</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
      {/* Display the selected value */}
      {selectedValue && (
        <div>
          <h4>Water source selected :</h4>
          <p>{selectedValue}</p>
        </div>
      )}

      <div className='mt-5'>
      <button onClick={redirectToOtherPage} class="btn btn-dark" type="button" >SUBMIT</button>

      </div>

     

     
    </div>

    



  );
}

export default Menu;
