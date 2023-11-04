import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from '../Assets/about.jpg'
import Header from './Header';

export default function About() {
  return (<>
    <Header />
    <Container className="mt-4">
      <Row>
        <Col>
          <img style={{ width: "100%", height: "400px" }} src={Aboutus} />
          <h2 style={{ marginTop: '20px' }}>About Us</h2>
          <p style={{ marginTop: '10px' }}>
            Welcome to our company's "About Us" page. We are a dedicated team of professionals
            passionate about delivering high-quality products and services to our clients.
          </p>
        </Col>

      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide innovative solutions that meet our customers' needs.
            We aim to exceed expectations in everything we do.
          </p>
        </Col>
        <Col md={6}>
          <h3>Our Team</h3>
          <p>
            Our team is comprised of talented individuals with diverse backgrounds and expertise.
            We work together to achieve common goals and deliver outstanding results.
          </p>
        </Col>
      </Row>
    </Container>
  </>
  );
}

