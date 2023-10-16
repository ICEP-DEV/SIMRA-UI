import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button, Form, FormControl, InputGroup } from 'react-bootstrap';

function App() {
  const [rowCount, setRowCount] = useState(1);

  const addRow = () => {
    setRowCount(rowCount + 1);
  };

  const calculateEstimatedCount = () => {
    let estimatedCount = 0;

    for (let index = 0; index < rowCount; index++) {
      const countInput = document.querySelector(`[name=count_${index + 1}]`);
      const ratioInput = document.querySelector(`[name=ratio_${index + 1}]`);

      estimatedCount += parseFloat(countInput.value);
    }

    alert(`Estimated Count: ${estimatedCount}`);
  }

  const updateRatioOptions = (e) => {
    const rowIndex = e.target.name.split('_')[1];
    const mstmakerSelect = document.querySelector(`[name=mstmaker_${rowIndex}]`);
    const ratioSelect = document.querySelector(`[name=ratio_${rowIndex}]`);

    const otherMstMakerInput = document.querySelector(`[name=other_mstmaker_${rowIndex}]`);
    const otherRatioInput = document.querySelector(`[name=other_ratio_${rowIndex}]`);

    const mstmakerValue = e.target.value;
    const ratioValue = e.target.value;;


    if (mstmakerValue === 'Cow') {
      ratioSelect.innerHTML = `
                    <option value="1:0.66">1:0.66</option>   
                `;
    } else if (mstmakerValue === 'Human') {
      ratioSelect.innerHTML = `
                    <option value="1:1">1:1</option>
                `;
    } else if (mstmakerValue === 'Dog') {
      ratioSelect.innerHTML = `
                    <option value="1:0.01">1:0.01</option>
                `;
    } else if (mstmakerValue === 'Pig') {
      ratioSelect.innerHTML = `
                    <option value="1:0.8">1:0.8</option>
                `;
    } else if (mstmakerValue === 'Chicken') {
      ratioSelect.innerHTML = `
                    <option value="1:0.01">1:0.01</option>
                          `;
    } else {
      ratioSelect.innerHTML = `
                    <option value="1:0.66">1:0.66</option>
                    <option value="1:1">1:1</option>
                    <option value="1:0.01">1:0.01</option>
                    <option value="1:0.8">1:0.8</option>
                    <option value="1:0.01">1:0.01</option>
                `;
    }

    if (mstmakerValue === 'Other') {
      mstmakerSelect.style.display = 'none';
      otherMstMakerInput.style.display = 'block';
    } else {
      ratioSelect.style.display = 'block';
      otherMstMakerInput.style.display = 'none';
    }
    if (ratioValue === 'Other') {
      otherRatioInput.style.display = 'block';
      ratioSelect.style.display = 'none';
    } else {
      otherRatioInput.style.display = 'none';
      ratioSelect.style.display = 'block';
    }

  };
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
      <h2 className="mb-3">MST DATA</h2>
      <Table striped bordered>
        <thead className="thead-light">
          <tr>
            <th>Count</th>
            <th>MST Maker Genes</th>
            <th>Ratio</th>
            <th>Reference Pathogen</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }).map((_, index) => (
            <tr key={index + 1}>
              <td>
                <Form.Control type="number" name={`count_${index + 1}`} />
              </td>
              <td>
                <Form.Control as="select" name={`mstmaker_${index + 1}`} onChange={updateRatioOptions}>
                  <option value="">--Select--</option>
                  <option value="Cow">Cow</option>
                  <option value="Human">Human</option>
                  <option value="Dog">Dog</option>
                  <option value="Pig">Pig</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Other">Other</option>
                </Form.Control>
                <FormControl
                  type="text"
                  name={`other_mstmaker_${index + 1}`}
                  style={{ display: 'none' }}
                />
              </td>
              <td>
                <Form.Control as="select" name={`ratio_${index + 1}`}>
                  <option value="">--Select--</option>
                  <option value="1:0.66">1:0.66</option>
                  <option value="1:1">1:1</option>
                  <option value="1:0.01">1:0.01</option>
                  <option value="1:0.08">1:0.08</option>
                  <option value="1:0.01">1:0.01</option>
                </Form.Control>
                <FormControl
                  type="text"
                  name={`other_ratio_${index + 1}`}
                  style={{ display: 'none' }}
                />
              </td>
              <td>
                <Form.Control as="select" name={`pathogen_${index + 1}`} onChange={updateModelOptions}>
                  <option value="">--Select--</option>
                  <option value="Cryptosporidium parvum">Cryptosporidium parvum</option>
                  <option value="E. coli O157:H7">E. coli O157:H7</option>
                  <option value="Campylobacter jejuni">Campylobacter jejuni</option>
                  <option value="Salmonella typhi">Salmonella typhi</option>
                  <option value="S. Flexneri">S. Flexneri</option>
                  <option value="Vibrio cholera">Vibrio cholera</option>
                  <option value="Giardia lambia">Giardia lambia</option>
                  <option value="Entamoeba coli">Entamoeba coli</option>
                  <option value="Other">Other</option>
                </Form.Control>
                <FormControl
                  type="text"
                  name={`other_pathogen_${index + 1}`}
                  style={{ display: 'none' }}
                />
              </td>
              <td>
                <Form.Control as="select" name={`model_${index + 1}`}>
                  <option value="">--Select--</option>
                  <option value="Beta-Poisson">Beta-Poisson</option>
                  <option value="Exponential">Exponential</option>
                </Form.Control>
                <FormControl
                  type="text"
                  name={`other_model_${index + 1}`}
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
        <Button variant="primary" id="calculateEstimatedCount" onClick={calculateEstimatedCount}>
          Calculate Estimated Count
        </Button>
      </div>
    </Container>
  );
}

export default App;
