import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {
  const certificates = [
    {
      title: "Example Certificate 1",
      issuer: "Example Organization",
      date: "2025",
      image: "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    // Add more certificates here
  ];

  return (
    <section className="certificate" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              }
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificates</h2>
                <p>Here are some of my achievements and certifications that showcase my expertise and continuous learning journey.</p>
                <Row>
                  {certificates.map((cert, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                      <div className="cert-card">
                        <img src={cert.image} alt={cert.title} className="cert-image" />
                        <div className="cert-content">
                          <h3>{cert.title}</h3>
                          <p>{cert.issuer}</p>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;