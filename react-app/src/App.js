import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import './App.css';*/

const WaterPurificationMethods = () => {
  const methods = [
    {
      title: '1. Boiling',
      description: 'Bring the water to a rolling boil and maintain it for at least one minute. Allow the water to cool before use.',
      image: '/images/boiling.jpg'
    },
    {
      title: '2. SODIS (Solar Water Disinfection)',
      description: 'Fill clear, plastic bottles with water and leave them in direct sunlight for at least six hours (or longer if it’s cloudy) to disinfect the water.',
      image: '/images/sodis.png'
    },
    {
      title: '3. Chemical Disinfection',
      description: 'Add a cap full of bleach in 25L of water. Allow the treated water to sit for a specific contact time before consuming.',
      image: '/images/bleach.jpg'
    },
    {
      title: '4. Filtration',
      description: 'Choose a water filter certified for the removal of specific contaminants (e.g., use a cloth folded 8 times/clay pots/ceramic filters).',
      image: '/images/filtering.jpg'
    }
  ];

  return (
    <Container style={{ maxWidth: '550px' }}>
      {methods.map((method, index) => (
        <Card key={index} className={`my-3 ${index !== 0 ? 'mt-5' : ''}`} style={{ marginBottom: '60px', minHeight: '250px', position: 'relative' }}>
          <div className="img-container" style={{ height: '100%', overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              src={method.image}
              alt={method.title}
              className="img-fluid"
              style={{ objectFit: 'cover', minHeight: '70%', minWidth: '90%' }}
            />
          </div>
          <Card.Body>
            <Card.Title>{method.title}</Card.Title>
            <Card.Text>{method.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default WaterPurificationMethods;
