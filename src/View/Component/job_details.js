import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Assets/banner2.jpg";
import Card from 'react-bootstrap/Card';
import icons from "../Assets/job-list1.png";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function JobDetail() {
    return (
        <Container fluid >
            <Row>
                <Col style={{ padding: "0" }}>
                    <img
                        src={Banner}
                        alt="Banner"
                        style={{ width: "100%", height: "450px" }}
                    />
                </Col>
            </Row>
            <Row>
                <Col style={{ marginLeft: "60px" }}>
                    <Card>
                        <Card.Img src={icons} alt="Card image" style={{ width: "80px", height: "80px" }} />
                        <Card.Body>
                            <Card.Title className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </Card.Title>
                            <Card.Text className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Row style={{ marginTop: "60px" }}>
                        <h4>Job Description</h4>
                        <p style={{ marginLeft: "60px", paddingRight: "80px" }}>It is a long established fact that a reader will beff distracted by vbthe creadable content of a page when looking at its layout. The pointf of using Lorem Ipsum is that it has ahf mcore or-lgess normal distribution of letters, as opposed to using, Content here content here making it look like readable.</p>
                    </Row>
                    <Row style={{ marginTop: "60px" }}>
                        <h4>Required Knowledge, Skills, and Abilities</h4>
                        <ul style={{ marginLeft: "60px" }}>
                            <li>System Software Development</li>
                            <li>Mobile Applicationin iOS/Android/Tizen or other platform</li>
                            <li>Research and code , libraries, APIs and frameworks</li>
                            <li>Strong knowledge on software development life cycle</li>
                            <li>Strong problem solving and debugging skills</li>
                        </ul>
                    </Row>
                    <Row style={{ marginTop: "60px" }}>
                        <h4>Education + Experience</h4>
                        <ul style={{ marginLeft: "60px" }}>
                            <li>3 or more years of professional design experience</li>
                            <li>Direct response email experience</li>
                            <li>Ecommerce website design experience</li>
                            <li>Familiarity with mobile and web apps preferred</li>
                            <li>Experience using Invision a plus</li>
                        </ul>
                    </Row>
                </Col>
                <Col xl="4" lg="4">
                    <Row>
                        <Card style={{ width: "370px", height: "420px" }}>
                            <Card.Body>
                                <Card.Title>Job Overview</Card.Title>
                                <Card.Text>Posted date: <span>12 Aug 2019</span></Card.Text>
                                <Card.Text>Location: <span>New York</span></Card.Text>
                                <Card.Text>Vacancy: <span>02</span></Card.Text>
                                <Card.Text>Job nature: <span>Full time</span></Card.Text>
                                <Card.Text>Salary: <span>$7,800 yearly</span></Card.Text>
                                <Card.Text>Application date: <span>12 Sep 2020</span></Card.Text>
                                <Button variant="primary">Apply Now</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <h3>Company Information</h3>
                        <h4>Colorlib</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div style={{display: "flex"}}>
                            <h4>Name: </h4><span style={{paddingTop:"6px", paddingLeft: "8px"}}>Colorlib</span>
                        </div>
                        <div style={{display: "flex"}}>
                            <h4>Web: </h4><span style={{paddingTop:"6px", paddingLeft: "8px"}}>colorlib.com</span>
                        </div>
                        <div style={{display: "flex"}}>
                            <h4>Email: </h4><span style={{paddingTop:"6px", paddingLeft: "8px"}}>carrier.colorlib@gmail.com</span>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
