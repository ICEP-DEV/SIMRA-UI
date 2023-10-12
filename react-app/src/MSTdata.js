import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialRow = {
  count: '',
  mstMaker: '',
  referencePathogen: '',
  ratio: '',
};

function MSTData() {
  const [rows, setRows] = useState([initialRow]);

  const handleAddRow = () => {
    setRows([...rows, initialRow]);
  };

  const handleRowChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <div className="container">
      <h1 className="text-center">MST DATA</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Count</th>
            <th>MST Maker</th>
            <th>Reference Pathogen</th>
            <th>Ratio</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder=""
                  value={row.count}
                  onChange={(e) => handleRowChange(index, 'count', e.target.value)}
                />
              </td>
              <td>
                <select
                  className="form-control mst-maker"
                  value={row.mstMaker}
                  onChange={(e) => handleRowChange(index, 'mstMaker', e.target.value)}
                >
                  <option value="">--Select--</option>
                  <option value="Cow">Cow</option>
                  <option value="Human">Human</option>
                  <option value="Dog">Dog</option>
                  <option value="Pig">Pig</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Other">Other</option>
                </select>
              </td>
              <td>
                <select
                  className="form-control reference-pathogen"
                  value={row.referencePathogen}
                  onChange={(e) => handleRowChange(index, 'referencePathogen', e.target.value)}
                >
                  <option value="">--Select--</option>
                  <option value="Campylobacter jejuni">Campylobacter jejuni</option>
                  <option value="Cryptosporidium parvum">Cryptosporidium parvum</option>
                  <option value="Giardia lambia">Giardia lambia</option>
                  <option value="Other">Other</option>
                </select>
              </td>
              <td>
                <select
                  className="form-control ratio"
                  value={row.ratio}
                  onChange={(e) => handleRowChange(index, 'ratio', e.target.value)}
                >
                  <option value="1:0.66">1:0.66</option>
                  <option value="1:1">1:1</option>
                  <option value="1:0.01">1:0.01</option>
                  <option value="1:0.08">1:0.08</option>
                  <option value="1:0.01">1:0.01</option>
                  <option value="Other">Other</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={handleAddRow}>Add Row</button>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary">Calculate Estimated Count</button>
      </div>
    </div>
  );
}

export default MSTData;