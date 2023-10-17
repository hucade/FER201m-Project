import { Container, Col, Row } from "react-bootstrap";
import { React } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function JobListing() {
    return (
        <Container>
            <Row style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                <Col xl={1} lg={1} md={2} style={{ placeItems: "center" }}>
                    <Row>
                        <Col xl={12} lg={12} md={12}>
                            <div className="small-section-tittle2 mb-45" style={{ display: "flex", alignItems: "center" }}>
                                <div className="ion">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="12px">
                                        <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
                                    </svg>
                                </div>
                                <h4>Filter Jobs</h4>
                            </div>
                        </Col>
                    </Row>
                    <Card style={{ width: '18rem' }}>
                        <div class="job-category-listing mb-50">
                            <div class="single-listing">
                                <div class="small-section-tittle2">
                                    <h4>Job Category</h4>
                                </div>
                                <div class="select-job-items2" >
                                    <select name="select">
                                        <option value="">All Category</option>
                                        <option value="">Category 1</option>
                                        <option value="">Category 2</option>
                                        <option value="">Category 3</option>
                                        <option value="">Category 4</option>
                                    </select>
                                </div>
                                <div class="select-Categories pt-80 pb-50" style={{ display: "grid" }}>
                                    <div class="small-section-tittle2">
                                        <h4>Job Type</h4>
                                    </div>
                                    <label class="container">Full Time
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Part Time
                                        <input type="checkbox" checked="checked active" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Remote
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Freelance
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="single-listing">
                                <div class="small-section-tittle2">
                                    <h4>Job Location</h4>
                                </div>
                                <div class="select-job-items2">
                                    <select name="select">
                                        <option value="">Anywhere</option>
                                        <option value="">Category 1</option>
                                        <option value="">Category 2</option>
                                        <option value="">Category 3</option>
                                        <option value="">Category 4</option>
                                    </select>
                                </div>
                                <div class="select-Categories pt-80 pb-50" style={{ display: "grid" }}>
                                    <div class="small-section-tittle2">
                                        <h4>Experience</h4>
                                    </div>
                                    <label class="container">1-2 Years
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">2-3 Years
                                        <input type="checkbox" checked="checked active" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">3-6 Years
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">6-more..
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={11} lg={11} md={11}>
                    <Container>
                        <Row>
                            <Col>
                                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                    <span>39, 782 Jobs found</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <span>Sort by</span>
                                    <select name="select">
                                        <option value="">None</option>
                                        <option value="">job list</option>
                                        <option value="">job list</option>
                                        <option value="">job list</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
