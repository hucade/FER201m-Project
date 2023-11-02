import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col } from "react-bootstrap";
import logo from "../Assets/logo.png";

import { Link } from "react-router-dom";
export default function Register() {

    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [RoleId, setRoleId] = useState(0);
    const [FieldOfExpertise, setFieldOfExpertise] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Register the user here
    };

    return (
        <Row>
            <ToastContainer />
            <Col >

                <div >
                    <div className="offset-lg-2 col-lg-8 " style={{marginTop:"40px", marginBottom:"30px"}}>
                        <div className="card">
                            <div className="card-header" style={{backgroundColor: "#f4f4eb"}} >
                                <h1 className="text-center ">Sign Up</h1>
                            </div>
                            <div className="card-body" style={{backgroundColor: "#f4f4eb"}}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Email <span className="errmsg">*</span></label>
                                            <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Password <span className="errmsg">*</span></label>
                                            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Full Name <span className="errmsg">*</span></label>
                                            <input value={Name} onChange={e => setName(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Phone <span className="errmsg"></span></label>
                                            <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Role <span className="errmsg">*</span></label>
                                            <select value={RoleId} onChange={e => setRoleId(parseInt(e.target.value))} className="form-control">
                                                <option value="">Choose Role</option>
                                                <option value={1}>Applicant</option>
                                                <option value={2}>Company</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Field of Expertise <span className="errmsg">*</span></label>
                                            <select value={FieldOfExpertise} onChange={e => setFieldOfExpertise(parseInt(e.target.value))} className="form-control">
                                                <option value="">Choose Field of Expertise</option>
                                                <option value={1}>Software Engineering</option>
                                                <option value={2}>Digital Art Design</option>
                                                <option value={3}>Artificial Intelligence</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer" style={{backgroundColor: "#f4f4eb"}}>
                                <button type="submit" className="btn btn-primary text-white offset-lg-4" style={{width:'13%'}}>Sign Up</button>
                                <Link to={'/login'} className="btn btn-danger text-white offset-lg-1" style={{width:'13%'}}>Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );

}