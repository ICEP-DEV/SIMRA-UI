import React, { useState } from 'react';
import { Container, Table, Button, Form, FormControl, InputGroup } from 'react-bootstrap';


function App() {
  const [rows, setRows] = useState([
    {
      count: '',
      mstmaker: '',
      ratio: '',
      pathogen: '',
      model: '',
    },
  ]);

  const addRow = () => {
    setRows([...rows, { count: '', mstmaker: '', ratio: '', pathogen: '', model: '' }]);
  };

  const updateRow = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  /*const renderRows = () => {
    return rows.map((row, index) => (
      <tr key={index}>
        <td>
          <Form.Control
            type="number"
            value={row.count}
            onChange={(e) => updateRow(index, 'count', e.target.value)}
          />
        </td>
        <td>
          <Form.Control
            as="select"
            value={row.mstmaker}
            onChange={(e) => updateRow(index, 'mstmaker', e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="Cow">Cow</option>
            <option value="Human">Human</option>
            <option value="Dog">Dog</option>
            <option value="Pig">Pig</option>
            <option value="Chicken">Chicken</option>
            <option value="Other">Other</option>
          </Form.Control>
        </td>
        <td>
          <Form.Control
            as="select"
            value={row.ratio}
            onChange={(e) => updateRow(index, 'ratio', e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="1:0.66">1:0.66</option>
            <option value="1:1">1:1</option>
            <option value="1:0.01">1:0.01</option>
            <option value="1:0.08">1:0.08</option>
            <option value="1:0.01">1:0.01</option>
          </Form.Control>
        </td>
        <td>
          <Form.Control
            as="select"
            value={row.pathogen}
            onChange={(e) => updateRow(index, 'pathogen', e.target.value)}
          >
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
        </td>
        <td>
          <Form.Control
            as="select"
            value={row.model}
            onChange={(e) => updateRow(index, 'model', e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="Beta-Poisson">Beta-Poisson</option>
            <option value="Exponential">Exponential</option>
          </Form.Control>
        </td>
      </tr>
    ));
  };*/

  const renderRows =<div>
    {/* {rows.map((row, index) => (
      <table>
        <tr></tr>
      </table>
    ))} */}
  </div>

  return (
    <Container>
      {/* <h1>MST DATA</h1>
      <Table striped bordered hover>
        <thead >
          <tr>
            <th>Count</th>
            <th>MST Maker Genes</th>
            <th>Ratio</th>
            <th>Reference Pathogen</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </Table>
      <Button variant="primary" onClick={addRow}>
        Add Row
      </Button> */}
    </Container>
  );
}
export default App;
