import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button, Form } from 'react-bootstrap';
import Modal from 'react-modal';

function App() {
  const [rowCount, setRowCount] = useState(1);
  const [rowData, setRowData] = useState([
    {
      count: '',
      indicator: '',
      ratio: '',
      pathogen: '',
      model: '',
    },
  ]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [countEstimate, setCountEstimate] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addRow = () => {
    setRowCount(rowCount + 1);
    setRowData([
      ...rowData,
      {
        count: '',
        indicator: '',
        ratio: '',
        pathogen: '',
        model: '',
      },
    ]);
  };

  const handleCountChange = (event, index) => {
    const updatedRowData = [...rowData];
    updatedRowData[index].count = event.target.value;
    setRowData(updatedRowData);
  };

  const handleIndicatorChange = (event, index) => {
    const selectedIndicator = event.target.value;
    const updatedRowData = [...rowData];
    updatedRowData[index].indicator = selectedIndicator;

    if (selectedIndicator !== 'Other') {
      updatedRowData[index].ratio = getDefaultRatio(selectedIndicator);
    } else {
      updatedRowData[index].ratio = '';
    }

    setRowData(updatedRowData);
  };

  const handleRatioChange = (event, index) => {
    const selectedRatio = event.target.value;
    const updatedRowData = [...rowData];
    updatedRowData[index].ratio = selectedRatio;
    setRowData(updatedRowData);
  };

  const handlePathogenChange = (event, index) => {
    const selectedPathogen = event.target.value;
    const updatedRowData = [...rowData];
    updatedRowData[index].pathogen = selectedPathogen;

    if (selectedPathogen !== 'Other') {
      updatedRowData[index].model = getDefaultModel(selectedPathogen);
    } else {
      updatedRowData[index].model = '';
    }

    setRowData(updatedRowData);
  };

  const handleModelChange = (event, index) => {
    const selectedModel = event.target.value;
    const updatedRowData = [...rowData];
    updatedRowData[index].model = selectedModel;
    setRowData(updatedRowData);
  };

  const calculateEstimatedCount = () => {
    let estimatedCount = 0;
    for (const row of rowData) {
      // Implement your calculation logic here using row.count, row.ratio, row.model, etc.
    }
    setCountEstimate(estimatedCount);
    setShowSuccessMessage(true);
    openModal();
  };

  const getDefaultRatio = (selectedIndicator) => {
    switch (selectedIndicator) {
      case 'Coliforms':
        return '1:1';
      case 'Ecoli':
        return '1:0.66';
      case 'Enterococcus':
        return '1:0.01';
      case 'Clostridium':
        return '1:0.8';
      default:
        return '';
    }
  };

  const getDefaultModel = (selectedPathogen) => {
    return selectedPathogen === 'Cryptosporidium parvum' || selectedPathogen === 'Giardia lambia'
      ? 'Exponential'
      : 'Beta-Poisson';
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-3">FIB DATA</h2>
      <Table striped bordered hover>
        <thead className="thead-light">
          <tr>
            <th>Count</th>
            <th>Indicator</th>
            <th>Ratio</th>
            <th>Reference Pathogen</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index}>
              <td>
                <Form.Control
                  type="text"
                  name={`count_${index}`}
                  value={row.count}
                  onChange={(event) => handleCountChange(event, index)}
                />
              </td>
              <td>
                <Form.Control
                  as="select"
                  name={`indicator_${index}`}
                  value={row.indicator}
                  onChange={(event) => handleIndicatorChange(event, index)}
                >
                  <option value="">--Select--</option>
                  <option value="Coliforms">Coliforms</option>
                  <option value="Ecoli">Ecoli</option>
                  <option value="Enterococcus">Enterococcus</option>
                  <option value="Clostridium">Clostridium</option>
                  <option value="Other">Other</option>
                </Form.Control>
                {row.indicator === 'Other' && (
                  <Form.Control
                    type="text"
                    placeholder=""
                    name={`other_indicator_${index}`}
                    onChange={(event) => handleIndicatorChange(event, index)}
                  />
                )}
              </td>
              <td>
                {row.indicator === 'Other' ? (
                  <Form.Control
                    type="text"
                    name={`ratio_${index}`}
                    placeholder=""
                    value={row.ratio}
                    onChange={(event) => handleRatioChange(event, index)}
                  />
                ) : (
                  <Form.Control
                    as="select"
                    name={`ratio_${index}`}
                    value={row.ratio}
                    onChange={(event) => handleRatioChange(event, index)}
                  >
                    <option value="">--Select--</option>
                    <option value="1:0.66">1:0.66</option>
                    <option value="1:1">1:1</option>
                    <option value="1:0.01">1:0.01</option>
                    <option value="1:0.08">1:0.08</option>
                    <option value="1:0.01">1:0.01</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                )}
              </td>
              <td>
                <Form.Control
                  as="select"
                  name={`pathogen_${index}`}
                  value={row.pathogen}
                  onChange={(event) => handlePathogenChange(event, index)}
                >
                  <option value="">--Select--</option>
                  <option value="Cryptosporidium parvum">Cryptosporidium parvum</option>
                  <option value="EcoliO157H7">Ecoli O157:H7</option>
                  <option value="Campylobacter jejuni">Campylobacter jejuni</option>
                  <option value="Salmonella typhi">Salmonella typhi</option>
                  <option value="S. Flexneri">S. Flexneri</option>
                  <option value="Vibrio cholera">Vibrio cholera</option>
                  <option value="Giardia lambia">Giardia lambia</option>
                  <option value="Entamoeba coli">Entamoeba coli</option>
                  <option value="Other">Other</option>
                </Form.Control>
                {row.pathogen === 'Other' && (
                  <Form.Control
                    type="text"
                    placeholder=""
                    name={`other_pathogen_${index}`}
                    onChange={(event) => handlePathogenChange(event, index)}
                  />
                )}
              </td>
              <td>
                {row.pathogen === 'Other' ? (
                  <Form.Control
                    type="text"
                    name={`model_${index}`}
                    placeholder=""
                    value={row.model}
                    onChange={(event) => handleModelChange(event, index)}
                  />
                ) : (
                  <Form.Control
                    as="select"
                    name={`model_${index}`}
                    value={row.model}
                    onChange={(event) => handleModelChange(event, index)}
                  >
                    <option value="">--Select--</option>
                    <option value="Beta-Poisson">Beta-Poisson</option>
                    <option value="Exponential">Exponential</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className="btn btn-primary mt-5" variant="primary" id="add-row-btn" onClick={addRow}>
        Add Row
      </Button>
      <div className="text-center">
        <Button className="btn btn-primary mt-5" id="calculateEstimatedCount" onClick={calculateEstimatedCount}>
          Calculate Estimated Count
        </Button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Count Estimate Modal"
        >
          <h2>Count Estimate</h2>
          <p>The Estimated Count is: {countEstimate}</p>
          <Button style={{ color: 'black' }} onClick={closeModal}>
            Close
          </Button>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
