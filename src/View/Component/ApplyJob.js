import React from 'react';
// import '../Assets/scss/ApplyJob.scss';


export default function ApplyJobs() {
    return (
        <div className="apply-job">
            <div className="container">
                <header className="header">
                    <h1 className="post-job">Fill the form </h1>
                </header>
                <form>
                    <div className="form-group">
                        <label id="name-label" for="name">
                            Enter Your Name
                        </label>
                        <input
                            type="text"
                            name="name"

                            className="form-control"
                            placeholder="Enter Your Name"

                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Upload Your Resume
                        </label>
                        <label>
                            <input type="file" id="myFile" name="filename" required />
                        </label>
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="submit-button"

                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

