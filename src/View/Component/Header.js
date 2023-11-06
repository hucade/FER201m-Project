import React from 'react';
import { Container, Row, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png";
import '../Assets/scss/Header.scss';

export default function Header() {
    const isUserLoggedIn = sessionStorage.getItem("currUser");
    function handleLogout() {
        sessionStorage.removeItem("currUser");
        window.location.href = "/login";
    }
    return (
        <Container fluid>
            <header>
                <Col style={{ padding: "0" }}>
                    <Row>
                        <div className="inner">
                            <div className="Logo" style={{ marginTop: '5px' }}>
                                <Link to="../">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="tab">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/JobListing">Find a Job</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </div>
                            <div>
                                {!isUserLoggedIn ? (
                                    <div className='tab'>
                                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    </div>
                                ) : (
                                    <div className='tab'>
                                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Row>
                </Col>
            </header>
        </Container>
    );
}
