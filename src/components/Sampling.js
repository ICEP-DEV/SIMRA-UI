import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import {useEffect} from 'react';


function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    
    navigate('/Home');
  };
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (eventKey) => {
      setSelectedValue(eventKey);
    };

    //point
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
  
    useEffect(() => {
      // Get user's location using the Geolocation API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
  
          // Set location
          setLocation({ latitude, longitude });
  
          // Use reverse geocoding service to get address
          axios
            .get(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            )
            .then((response) => {
              setAddress(response.data.display_name);
            })
            .catch((error) => {
              console.error('Error fetching address:', error);
            });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }, []);

  return (
    <div className="text-center">
      <h2>Sampling Date :</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Customize the date format as needed
      />
      {selectedDate && (
        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      )}

<div className="text-center"> 
      <Dropdown onSelect={handleSelect}>
        <h3>weather condition </h3>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          WEATHER CONDITION
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#cloudy">cloudy</Dropdown.Item>
          <Dropdown.Item href="#Rainy">Rainy</Dropdown.Item>
          <Dropdown.Item href="#Sunny">Sunny</Dropdown.Item>
          <Dropdown.Item href="#windy">windy</Dropdown.Item>
          
          
        </Dropdown.Menu>
      </Dropdown>
      {/* Display the selected value */}
      {selectedValue && (
        <div>
          <h4>weather condtition selected :</h4>
          <p>{selectedValue}</p>
        </div>
      )}

<div>
      {location && (
        <div>
          <h2>Your sampling point:</h2>

          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          {address && <p>Address: {address}</p>}
        </div>
      )}
    </div>

      <div className='mt-5'>
      <button onClick={redirectToOtherPage} class="btn btn-dark" type="button" >SUBMIT</button>

      </div>


    </div>
</div>
    
  );
}

export default DateSelector;




