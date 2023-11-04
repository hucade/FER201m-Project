import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col } from "react-bootstrap";
import '../Assets/scss/login.scss'
import GoogleButton from 'react-google-button'
export default function Login() {
    const [currUser, setCurrUser] = useState({});
    const [UserList, setUserList] = useState([]);
    const email = useRef(null);
    const password = useRef(null);
    useEffect(() => {
        // setCurrUserId(3); // Update the currUserId value using the setter function
        fetch(`http://localhost:9999/user`)
            .then((res) => res.json())
            .then((result) => {
                setUserList(result);
            });
    }, []);
    const HandleLogin = (e) => {
        e.preventDefault();
        let found = false;

        UserList.map((u) => {
            if (
                u.email === email.current.value &&
                u.password === password.current.value
            ) {
                found = true;
                const currUser = {
                    id: u.id,
                    username: u.username,
                    email: u.email,
                    role: u.role,
                };
                sessionStorage.setItem("currUser", JSON.stringify(currUser));

                if (u.role === 1) {
                    window.location.href = "/admin";
                } else if (u.role === 2) {
                    window.location.href = "/";
                } else if (u.role === 3) {
                    window.location.href = "/company";
                }
            }
        });

        if (!found) {
            toast.error("Incorrect username and password");
        }
    };
    return (
        <Row>
            <ToastContainer />
            <Col style={{ marginBottom: "20px", marginTop: "10px" }}>

                <div
                    className="col-lg-6"
                    style={{
                        margin: "0 auto",
                        backgroundColor: "#f4f4eb",
                        width: "40%",
                        height: "98%",
                        marginTop: "10px",
                        borderRadius: "15px",
                        boxShadow: "10px 10px #b3b3b1",
                        padding: "30px",
                    }}
                >
                    <h1 className="text-center">Login</h1>

                    <form className="Login" style={{ backgroundColor: "#f4f4eb" }}>
                        <Form style={{ backgroundColor: "#f4f4eb" }}>
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    ref={email}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label className="mt-2">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    ref={password}
                                />
                            </Form.Group>
                        </Form>
                        <div >
                            <div className="w-full flex items-center">
                                <input type="checkbox" className="w-3 h-2 " ></input>
                                Remember me for 30 days
                            </div>
                            <p className="text-right" style={{ marginLeft: "350px" }}> <a href="fgp">Forgot password?</a> </p>
                        </div>

                        <div className="w-full flex flex-col my-4">
                            <button
                                style={{ backgroundColor: "#343a40", border: "none" }}
                                type="submit"
                                className="form-control text-white"
                                onClick={(e) => HandleLogin(e)} >Log in</button>
                        </div>
                        <div class="or-seperator" ><i>or</i></div>
                        <GoogleButton
                            type="dark" // can be light or dark
                            marginBottom="30px"
                            onClick={() => { console.log('Google button clicked') }}
                        />
                        <div className="mt-3" style={{ marginLeft: "200px" }}>
                            <p className="text-left">Don't have an account?<a href="/Register"> Sign up here</a> </p>
                        </div>
                    </form>
                </div>
            </Col>
        </Row>
    );

}