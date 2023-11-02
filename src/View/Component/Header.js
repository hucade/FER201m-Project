import React from 'react';
import { Container, Row, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png";
import '../Assets/scss/Header.scss'

export default function Header() {
    return (
        <Container fluid>
            <header>
                <Col style={{ padding: "0" }}>
                    <Row>
                        <div className="inner">
                            <div className="Logo">
                                <Link to="../">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="tab">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/JobListing">Find a Jobs </Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
                            </div>
                            <div className='tab'>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                <Nav.Link as={Link} to="/login">login</Nav.Link>
                            </div>
                        </div>
                    </Row>
                </Col>
            </header>
        </Container>
    );
}

