import React from 'react';
import { Button, Form } from 'react-bootstrap';
// import '../Assets/scss/ApplyJob.scss';


export default function ApplyJobs() {
    return (
        <div className="apply-job">
            <div className="container">
                <header className="header">
                    <h1 className="post-job">Fill the form </h1>
                </header>
                <Form>

                    <Form.Group className="form-group">
                        <Form.Label id="name-label" for="name">
                            Enter Your Name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="name"

                            className="form-control"
                            placeholder="Enter Your Name"

                            required
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label>
                            Upload Your Resume
                        </Form.Label>
                        <Form.Label>
                            <Form.Control type="file" id="myFile" name="filename" required />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Button
                            type="submit"
                            className="submit-button"

                        >
                            Submit
                        </Button>
                    </Form.Group>

                </Form>
            </div>
        </div>
    );
}

