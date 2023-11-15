import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WaterPurificationMethods = () => {
    const images = [
        '/images/boiling.jpg',
        '/images/sodis.png',
        '/images/filtering.jpg',
        '/images/Bleachh.jfif',
        '/images/trii.jpg',
        '/images/Distillation.png',
        '/images/carbon.png',
        '/images/Purification.jpeg',
    ];

    const methods = [
        {
            title: '1. Boiling',
            description:
                'Bring the water to a rolling boil and maintain it for at least one minute (three minutes at higher altitudes).',
        },
        {
            title: '2. SODIS (Solar Water Disinfection)',
            description:
                "Fill clear, plastic bottles with water and leave them in direct sunlight for at least six hours (or longer if it's cloudy). The UV radiation from the sun will help disinfect the water.",
        },
        {
            title: '3. Filtration',
            description:
                'Choose a water filter certified for the removal of specific contaminants (e.g., use a cloth folded 8 times, clay pots, and ceramic filters).',
        },
        {
            title: '4. Chemical Disinfection',
            description:
                'Chemicals like chlorine bleach can be used to disinfect water. Add a cap full of bleach in 25L of water. Allow the treated water to sit for a specific contact time before consuming.',
        },
        {
            title: '5. Ultraviolet (UV) Treatment',
            description:
                'UV water purifiers use UV light to disinfect water by inactivating microorganisms.Install a UV purifier according to the manufacturer instructions and regularly replace the UV lamp if required. ',
        },
        {
            title: '6. Distillation',
            description:
              'Distillation involves boiling water and then collecting the condensed vapor. Collect the condensed vapor in a clean container, leaving impurities behind.',
        },
        {
            title: '7. Activated Carbon',
            description:
              ' Activated carbon filters can remove organic chemicals, chlorine, and bad tastes and odors from water. Install and maintain an activated carbon filter according to the manufacturer instructions.',
        }, 
        {
            title: '8. Portable Water Purification Tablets',
            description:
              'Use commercially available water purification tablets or drops according to the instructions on the packaging. Allow the specified contact time before drinking the water.',
        },  
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const carouselItems = images.map((image, index) => (
        <Carousel.Item key={index}>
            <img
                className="d-block w-100"
                src={image}
                alt={`Step ${index + 1}`}
            />
        </Carousel.Item>
    ));

    return (
        <Container>
        <Row className="justify-content-center mt-5">
            <Col md={8}>
                <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                    {carouselItems}
                </Carousel>
                <div className="method-details mt-3">
                    <div className="method-detail">
                        <h3>{methods[activeIndex].title}</h3>
                        <p>{methods[activeIndex].description}</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    );
};


export default WaterPurificationMethods;
