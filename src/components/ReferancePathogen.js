import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap'

function ReferancePathogen(){
    const [completedProcess, setcompletedProcess] = useState('Completed 0/0');
    const [activeMenu, setActiveMenu] = useState(null);
  
    const handleMenuClick = (menu) => {
      setActiveMenu(menu === activeMenu ? null : menu);
    };

    return (


        <>
          <br></br>
          <Container fluid>
            <Row className="justify-content-center">
              <Col xs={12} sm={8} md={6}>
                <Button variant="outline-primary" style={{ width: '100%' }} onClick={() => handleMenuClick('sanitary')}>Reference Pathogen {completedProcess && <span style={{ marginLeft: '300px' }}>Completed { }/8</span>}</Button>
                {activeMenu === 'sanitary' && (
                  <div>
                    <ol>
    
                      <li> <input type="radio" id="Pathogenic E. coli" name="refPath" value="Pathogenic E. coli"></input>
                        <label for="Pathogenic E. coli">Pathogenic E. coli</label></li>
                      <li><input type="radio" id="Cryptosporidium" name="refPath" value="Cryptosporidium"></input>
                        <label for="Cryptosporidium">Cryptosporidium</label></li>
                      <li><input type="radio" id="E. coli O157:H7" name="refPath" value="E. coli O157:H7rehole"></input>
                        <label for="E. coli O157:H7">E. coli O157:H7</label></li>
                      <li><input type="radio" id="Campylobacter" name="refPath" value="Campylobacter"></input>
                        <label for="Campylobacter">Campylobacter</label></li>
                      <li><input type="radio" id="Cryptosporidium" name="refPath" value="Cryptosporidium"></input>
                        <label for="Cryptosporidium">Cryptosporidium</label></li>
                      <li><input type="radio" id="Salmonella spp" name="refPath" value="Salmonella spp"></input>
                        <label for="Salmonella spp">Salmonella spp</label></li>
                      <li><input type="radio" id="STEC" name="refPath" value="STEC"></input>
                        <label for="STEC">STEC</label></li>
                      <li><input type="radio" id="Salmonella" name="refPath" value="Salmonella"></input>
                        <label for="Salmonella">Salmonella</label></li>
                      <li><input type="radio" id="Shigella" name="refPath" value="Shigella"></input>
                        <label for="Shigella">Shigella</label></li>
                      <li><input type="radio" id="V. cholera" name="refPath" value="V. cholera"></input>
                        <label for="V. cholera">V. cholera</label></li>
                      <li><input type="radio" id="Giardia" name="refPath" value="Giardia"></input>
                        <label for="Giardia">Giardia</label></li>
                      <li><input type="radio" id="E. Histolytica" name="refPath" value="E. Histolytica"></input>
                        <label for="E. Histolytica">E. Histolytica</label></li>
                      <li><input type="radio" id="C. jejuni" name="refPath" value="C. jejuni"></input>
                        <label for="C. jejuni">C. jejuni</label></li>
    
                    </ol>
                    <div style={{ textAlign: 'center'}}><Button variant="outline-primary" style={{ width: '50%' }} >Next</Button></div>
                    
                  </div>
                  
                )}
              </Col>
    
            </Row>
          </Container>
        </>
      );
    
}
export default ReferancePathogen;