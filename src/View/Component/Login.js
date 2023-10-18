import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './or.scss'
import logo from "../Assets/logo.png";
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
            <div className="Logo" style={{ marginTop: "20px", marginRight: "10px" }}>
                    <Link to="../">
                        <img src={logo} alt="" />
                    </Link>
                </div>
            <ToastContainer />
            <Col >
                <div
                    className="col-lg-11"
                    style={{
                        margin: "100px",
                        backgroundColor: "#f4f4eb",
                        height: "610px",
                        marginTop: "100px",
                        borderRadius: "15px",
                        boxShadow: "10px 10px #b3b3b1",
                        padding: "70px"
                    }}
                >
                    <h1 className="text-center ">Login</h1>

                    <form className="Login">
                        <Form onSubmit={handleSubmit}>
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
                                <input type="checkbox" className="w-3 h-2 mr-1" />
                                <p className="text-center mt-3">Remember me for 30 days</p>
                            </div>
                            <p className="text-right"> <a href="fgp">Forgot password?</a> </p>

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
                            onClick={() => { console.log('Google button clicked') }}
                        />
                        <div className="mt-5">
                            <p className="text-right">Don't have an account?<a href="Register"> Sign up here</a> </p>
                        </div>
                    </form>
                </div>
            </Col>
        </Row>
    );

}