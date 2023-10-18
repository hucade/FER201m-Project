import { Col, Container, Row } from "react-bootstrap"; import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './PostJob.css'
export default function PostJob() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log('Hellloooooo');
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Col xs={10} className="bg-dark-subtle  ">
            <Row className="bg-white">
                <div id="label" className="text-center fs-1 font ">
                    Post A Job
                </div>
            </Row>
            <Row className="mt-3 bg-white ">
                <Container>
                    <Row className="d-flex ">
                        <div id="subLabel" className="text-center my-4">
                            <i className="bi bi-briefcase text-bg-light"></i>
                            <span className="ms-3 fw-bolder ">Job Information</span>
                        </div>
                        <div className="row justify-content-center  ">
                            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ width: "50%", }}>
                                <Row className="md-12">
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="my-4">
                                        <Form.Label>Job Title</Form.Label>
                                        <span className="text-danger "> *</span>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="eg. Sennior UX Design"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationPosition">
                                        <Form.Label>Position</Form.Label>
                                        <Form.Select aria-label="Please select" >
                                            <option value="1">Staff</option>
                                            <option value="2">Intern</option>
                                            <option value="3">Director</option>
                                            <option value="4">Manager</option>
                                        </Form.Select>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please select a  position.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationPosition">
                                        <Form.Label>Job Form</Form.Label>
                                        <Form.Select aria-label="Please select" >
                                            <option value="1">Part Time</option>
                                            <option value="2">Full Time</option>
                                            <option value="3">Internship</option>
                                        </Form.Select>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please select a  position.</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>Industry</Form.Label>
                                        <Form.Select aria-label="Please select" >
                                            <option value="1">IT Software Development</option>
                                            <option value="2">IT Hardware/Internet</option>
                                            <option value="3">Logistic</option>
                                        </Form.Select>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please select a  position.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                                        <Form.Label></Form.Label>
                                        <Form.Control type="text" placeholder="Location" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid location.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                                        <Form.Label>Salary</Form.Label>
                                        <Form.Control type="text" placeholder="eg. Deal or Salary Range" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid salary.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <div className="fs-5 fw-bold mt-3  "> Description</div>
                                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                                        <Form.Label>Job Description</Form.Label>
                                        <InputGroup>
                                            <Form.Control required as="textarea" aria-label="With textarea" placeholder="Description" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid description.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                                        <Form.Label>Requirement</Form.Label>
                                        <InputGroup>
                                            <Form.Control required as="textarea" aria-label="With textarea" placeholder="Description" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid requirement.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                                        <Form.Label>Benefits</Form.Label>
                                        <InputGroup>
                                            <Form.Control required as="textarea" aria-label="With textarea" placeholder="Description" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid benefits.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className="fs-5 fw-bold mt-3  "> Contact</div>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Contact Person Name"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Contact Person Name"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="tel"
                                            placeholder="Contact Person Name"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                                <Button className="mb-3" type="submit">Submit form</Button>
                            </Form>
                        </div>

                    </Row>
                </Container>
            </Row>
        </Col>
    )

}