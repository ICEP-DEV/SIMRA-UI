import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

const LikelihoodOfInfection = () => {
    const [showExposureOptions, setShowExposureOptions] = useState(false);
    const [selectedExposure, setSelectedExposure] = useState('');
    const [infectionResult, setInfectionResult] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [customExposure, setCustomExposure] = useState('');

    const exposureOptions = ['Weekly', 'Monthly', 'Half yearly', 'Yearly', 'Quarterly', 'Other'];

    const handleExposureClick = (exposure) => {
        if (exposure === 'Other') {
            setSelectedExposure('Other');
        } else {
            setSelectedExposure(exposure);
        }
        setShowExposureOptions(false);
    };

    const calculateInfection = () => {
        let selected = selectedExposure;
        if (selected === 'Other') {
            selected = customExposure;
        }

        const infectionProbability = '';
        setInfectionResult(`The likelihood of infection = ${infectionProbability}`);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
        <div className="d-grid gap-2 col-6 mx-auto mt-4">
            <Button variant="outline-info" size="lg" className="my-3">
                PI
            </Button>
            <Button
                variant="outline-info"
                size="lg"
                onClick={() => setShowExposureOptions(!showExposureOptions)}
                className="my-3"
            >
                {selectedExposure ? selectedExposure : 'Likelihood of Infection'}
            </Button>
            {showExposureOptions && (
               <Dropdown data-bs-theme="dark" className="my-3">
               <Dropdown.Toggle variant="info" size="lg" id="dropdown-button-dark-example1">
                   {selectedExposure ? selectedExposure : 'Select Exposure'}
               </Dropdown.Toggle>

               <Dropdown.Menu>
                   {exposureOptions.map((exposure, index) => (
                       <Dropdown.Item
                           key={index}
                           onClick={() => handleExposureClick(exposure)}
                       >
                           {exposure}
                       </Dropdown.Item>
                   ))}
               </Dropdown.Menu>
           </Dropdown>
            )}

            {selectedExposure === 'Other' && (
                <input
                    type="text"
                    placeholder=""
                    value={customExposure}
                    onChange={(e) => setCustomExposure(e.target.value)}
                    className="my-3"
                />
            )}

            <Button
                variant="dark"
                size="lg"
                onClick={calculateInfection}
                className="my-3"
            >
                Calculate P(n)
            </Button>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Likelihood of Infection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {infectionResult}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </Container>
    );
};

export default LikelihoodOfInfection;