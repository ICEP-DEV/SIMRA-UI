import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function PathogenData() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  const handleRadioButtonChange = (event) => {
    setSelectedRadioButton(event.target.value);
  };

  return (
    <>
      <br></br>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6}>
            <Button
              variant="outline-primary"
              style={{ width: '100%' }}
              onClick={() => handleMenuClick('sanitary')}
            >
              Reference Pathogen
            </Button>
            {activeMenu === 'sanitary' && (
              <div>
                <ol>
                <li>
                    <input
                      type="radio"
                      id="Campylobacter jejuni"
                      name="refPath"
                      value="Campylobacter jejuni"
                      checked={selectedRadioButton === 'Campylobacter jejuni'}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="Campylobacter jejuni">Campylobacter jejuni</label>
                  </li>
                <li>
                    <input
                      type="radio"
                      id="Ecoli 0157"
                      name="refPath"
                      value="Ecoli 0157"
                      checked={selectedRadioButton === 'Ecoli 0157'}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="Ecoli 0157">Ecoli 0157</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Salmonella typhi"
                      name="refPath"
                      value="Salmonella typhi"
                      checked={selectedRadioButton === 'Salmonella typhi'}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="Salmonella typhi">Salmonella typhi</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="s. Flexi"
                      name="refPath"
                      value="s. Flexi"
                      checked={selectedRadioButton === 's. Flexi'}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="s. Flexi">s. Flexi</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Vibrio cholerea"
                      name="refPath"
                      value="Vibrio cholerea"
                      checked={selectedRadioButton === 'Vibrio cholerea'}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="Vibrio cholerea">Vibrio cholerea</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Cryptosporidium parvum"
                      name="refPath"
                      value="Cryptosporidium parvum"
                      checked={selectedRadioButton === 'Cryptosporidium parvum'}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="Cryptosporidium parvum">Cryptosporidium parvum</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Entamoeba coli"
                      name="refPath"
                      value="Entamoeba coli"
                      checked={selectedRadioButton === 'Entamoeba coli'}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="Entamoeba coli">Entamoeba coli</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Giardia lamblia"
                      name="refPath"
                      value="Giardia lamblia"
                      checked={selectedRadioButton === 'Giardia lamblia'}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="Giardia lamblia">Giardia lamblia</label>
                  </li>
                  
                </ol>
                <div style={{ textAlign: 'center' }}>
                  
                </div>
                {selectedRadioButton && (
                  <div >
                    <p style={{color: 'black'}}>You have selected: {selectedRadioButton}</p>
                  </div>
                )}
              </div>
              
            )}
            <Button variant="outline-primary" style={{ width: '50%' }}>
                    Next
                  </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PathogenData;
