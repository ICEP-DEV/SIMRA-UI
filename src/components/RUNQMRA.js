import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function RunQMRA(){
   const navigate = useNavigate();
   const containerStyle = {
      border: '1px solid grey',
      borderRadius: '10px', 
      padding: '20px', 
      
      alignItems: 'center',
    };
    const ShowGraph = () => {
      navigate(`/Graph`);
    };
    const showMethods = () => {
      navigate(`/MethodsLevel2`);
    };
    const riskProp = 1; 
let riskLevelBlock = null; 

if (riskProp < 1) {
  riskLevelBlock = (
    <>
    <div style={{ backgroundColor: 'green', padding: '15px' }}>
      <span style={{ color: 'black' }}>Low Risk</span>
    </div>
    <div className="text-center">
    <Button
          variant="outline-primary"
          style={{ width: '50%' }}
          onClick={ShowGraph}
        >
          Graph
        </Button></div>
    </>
  );
}else {
  riskLevelBlock = (
    <><div style={{ backgroundColor: 'red', padding: '5px' }}>
      <span style={{ color: 'black' }}>Very High Risk</span>
    </div>
    <div className="text-center">
    <Button
          variant="outline-primary"
          style={{ width: '50%' }}
          onClick={showMethods}
        >
          Methods
        </Button></div></>
  );
}
   return(
      <>
        <Container fluid>
          <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6}>
          <div backgroundColor='white' style={containerStyle}>
      
      <Popup
  trigger={
   <div>
   <Button variant="outline-primary" style={{ width: '100%' }}>RUN QMRA</Button>
</div>
  }
  modal
  nested
  overlayStyle={{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}
>
  {(close) => (
    <Card variant="outline-primary">
      <Card.Header>QMRA Results</Card.Header>
      <Card.Text><div style={{  color: 'blue' }}>The Probability Of Infection For</div></Card.Text>
      <Card.Text>{riskLevelBlock}</Card.Text>
     
    </Card>
  )}
</Popup>
      </div>
          </Col>
          </Row>

        </Container>
      </>
   );
}
export default RunQMRA
