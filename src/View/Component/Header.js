import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png";
import './Header.scss'
export default function HeaderStyle() {
    return (
        <header>
            <Container>
                <Row>
                    <div className="inner">
                        <div className="Logo">
                            <Link to="../">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="tab">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/">Find a Jobs </Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>                         
                            <Nav.Link as={Link} to="/">Page</Nav.Link>
                        </div>
                        <div className='action'>
                            
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
}

