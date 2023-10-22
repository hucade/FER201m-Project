import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../Assets/scss/login.scss'
import GoogleButton from 'react-google-button'
export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    function handleRegiter(e) {
        e.preventDefault();
    }

    return (
        <Row>
            <ToastContainer />
            <Col style={{marginBottom: "20px", marginTop:"10px"}}>

                <div
                    className="col-lg-6"
                    style={{
                        margin: "0 auto",
                        backgroundColor: "#f4f4eb",
                        width :"40%",
                        height: "98%",
                        marginTop: "10px",
                        borderRadius: "15px",
                        boxShadow: "10px 10px #b3b3b1",
                        padding: "30px",
                    }}
                >
                    <h1 className="text-center">Login</h1>

                    <form className="Login" style={{backgroundColor: "#f4f4eb"}}>
                        <Form onSubmit={handleSubmit} style={{backgroundColor: "#f4f4eb"}}>
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label className="mt-2">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                        <div className="text-center">
                            <div className="w-full flex items-center">
                                <input type="checkbox" className="w-3 h-2 mr-2" />
                                <p className="text-center mt-2">Remember me for 30 days</p>
                            </div>
                            <p className="text-right" style={{marginLeft:"350px"}}> <a href="fgp">Forgot password?</a> </p>
                        </div>

                        <div className="w-full flex flex-col my-4">
                            <button
                                style={{ backgroundColor: "#343a40", border: "none" }}
                                type="submit"
                                className="form-control text-white"
                                onClick={(e) => handleSubmit(e)} >Log in</button>
                        </div>
                        <div class="or-seperator" ><i>or</i></div>
                        <GoogleButton
                            type="dark" // can be light or dark
                            marginBottom="30px"
                            onClick={() => { console.log('Google button clicked') }}
                        />
                        <div className="mt-3" style={{marginLeft:"200px"}}>
                            <p className="text-left">Don't have an account?<a href="Register"> Sign up here</a> </p>
                        </div>
                    </form>
                </div>
            </Col>
        </Row>
    );

}