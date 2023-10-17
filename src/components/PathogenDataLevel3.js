
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function PathogenDataLevel3() {
    const [rowCount, setRowCount] = useState(1);
    const [rows, setRows] = useState([{ id: 1 }]);
    const navigate = useNavigate();


    const addRow = () => {
        setRowCount(rowCount + 1);
        setRows([...rows, { id: rowCount + 1 }]);
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
    } else {
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

    const updateModelOptions = (e) => {
        const rowIndex = e.target.name.split('_')[1];
        const pathogenSelect = document.querySelector(`[name=pathogen_${rowIndex}]`);
        const modelSelect = document.querySelector(`[name=model_${rowIndex}]`);

        const otherPathogenInput = document.querySelector(`[name=other_pathogen_${rowIndex}]`);
        const otherModelInput = document.querySelector(`[name=other_model_${rowIndex}]`);

        const pathogenValue = e.target.value;
        const modelValue = e.target.value;

        if (pathogenValue === 'Cryptosporidium parvum' || pathogenValue === 'Giardia lambia') {
            modelSelect.innerHTML = `
                  <option value="Exponential">Exponential</option>
              `;
        } else {
            modelSelect.innerHTML = `
                  <option value="Beta-Poisson">Beta-Poisson</option>
              `;
        }

        if (pathogenValue === 'Other') {
            pathogenSelect.style.display = 'none';
            otherPathogenInput.style.display = 'block';
        } else {
            modelSelect.style.display = 'block';
            otherPathogenInput.style.display = 'none';
        }
        if (modelValue === 'Other') {
            otherModelInput.style.display = 'block';
            modelSelect.style.display = 'none';
        } else {
            otherModelInput.style.display = 'none';
            modelSelect.style.display = 'block';
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-3">PATHOGEN DATA</h2>
            <Table striped bordered>
                <thead className="table-primary">
                    <tr>
                        <th>ID</th>
                        <th>Count</th>

                        <th>Reference Pathogen</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={row.id}>
                            <td>{index + 1}</td>
                            <td>
                                <Form.Control type="text" name={`count_${index + 1}`} />
                            </td>


                            <td>
                                <Form.Control as="select" name={`pathogen_${row.id}`} onChange={updateModelOptions}>
                                    <option value="">--Select--</option>
                                    <option value="Cryptosporidium parvum">Cryptosporidium parvum</option>
                                    <option value="E. coli O157:H7">E. coli O157:H7</option>
                                    <option value="Campylobacter jejuni">Campylobacter jejuni</option>
                                    <option value="Salmonella typhi">Salmonella Typhi</option>
                                    <option value="S. Flexneri">S. Flexneri</option>
                                    <option value="Vibrio cholera">Vibrio cholera</option>
                                    <option value="Giardia lambia">Giardia lambia</option>
                                    <option value="Entamoeba coli">Entamoeba coli</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                                <FormControl
                                    type="text"
                                    name={`other_pathogen_${row.id}`}
                                    style={{ display: 'none' }}
                                />
                            </td>
                            <td>
                                <Form.Control as="select" name={`model_${row.id}`}>
                                    <option value="">--Select--</option>
                                    <option value="Beta-Poisson">Beta-Poisson</option>
                                    <option value="Exponential">Exponential</option>
                                </Form.Control>
                                <FormControl
                                    type="text"
                                    name={`other_model_${row.id}`}
                                    style={{ display: 'none' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="primary" id="add-row-btn" onClick={addRow}>
                Add Row
            </Button>
            <div className="d-flex justify-content-center">
                <Popup
                    trigger={
                        <div>
                            <Button variant="outline-primary" style={{ width: '100%' }}>Calculate PI</Button>
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
                            <Card.Text><div style={{ color: 'blue' }}>The Probability Of Infection For</div></Card.Text>
                            <Card.Text>{riskLevelBlock}</Card.Text>

                        </Card>
                    )}
                </Popup>

            </div>
        </Container>
    );
}

export default PathogenDataLevel3



