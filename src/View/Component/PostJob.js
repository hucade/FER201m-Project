import React from "react";
import "../Assets/scss/PostJob.scss";
import { Navbar } from "react-bootstrap";
export default function PostJob() {
    return (
        <div>
            <Navbar />
            <div className="job-background">
                <div className="title">
                    <h2>Post a Job</h2>
                </div>
            </div>
            <div className="container">
                <header className="header">
                    <h1 className="post-job">Fill the form </h1>
                </header>
                <form>
                    <div className="form-group">
                        <label id="name-label" htmlFor="name">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Company Name"

                            required
                        />
                    </div>
                    <div className="form-group">
                        <label id="name-label" htmlFor="name">
                            Enter Job Location
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Job Location"

                            required
                        />
                    </div>
                    <div className="form-group">
                        <label id="logo-label" htmlFor="logo">
                            Company logo
                        </label>
                        <label>
                            <input
                                type="file"
                                id="myFile"
                                name="filename"

                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>What position are you posting for?</label>
                        <select
                            id="dropdown"
                            name="role"
                            className="form-control"

                            required
                        >
                            <option disabled selected value>
                                Select position
                            </option>
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Full Stack</option>
                            <option>Devops</option>
                            <option>Digital Marketing</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label id="name-label" htmlFor="name">
                            Enter Job Role
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Job Role"

                            required
                        />
                    </div>

                    <div
                        className="form-group"

                    >
                        <label>Experience </label>
                        <label>
                            <input
                                name="user-recommend"
                                value="0-1 Year"
                                type="radio"
                                className="input-radio"
                            />
                            0-1 Year
                        </label>
                        <label>
                            <input
                                name="user-recommend"
                                value=" 2-3 Years"
                                type="radio"
                                className="input-radio"
                            />
                            2-3 Years
                        </label>
                        <label>
                            <input
                                name="user-recommend"
                                value=" 4-5 Years"
                                type="radio"
                                className="input-radio"
                            />
                            4-5 Years
                        </label>
                        <label>
                            <input
                                name="user-recommend"
                                value="5+ Years"
                                type="radio"
                                className="input-radio"
                            />
                            5+ Years
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Salary</label>
                        <select
                            className="form-control"

                            required
                        >
                            <option disabled selected value>
                                Select Salary
                            </option>
                            <option value="0-15K">0-15K</option>
                            <option value="15-30K">15-30K</option>
                            <option value="30K-50K">30K-50K</option>
                            <option value="50K-80K">50K-80K</option>
                            <option value="80K+">80K+</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}