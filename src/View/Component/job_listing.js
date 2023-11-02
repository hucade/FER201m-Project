import { Container, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Banner from "../Assets/banner2.jpg";
export default function JobListing() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9999/job")
      .then((res) => setJobs(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <Row>
        <Col style={{ padding: "0" }}>
          <img
            src={Banner}
            alt="Banner"
            style={{ width: "100%", height: "450px" }}
          />
        </Col>
      </Row>
      <Row
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          padding: "20px",
        }}
      >
        <Col
          xl={4}
          lg={4}
          md={4}
          style={{ placeItems: "center", padding: "20px", marginLeft: "80px" }}
        >
          <Row>
            <Col>
              <div
                className="small-section-tittle2 mb-45"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="ion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="20px"
                    height="12px"
                  >
                    <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
                  </svg>
                </div>
                <h3>Filter Jobs</h3>
              </div>
            </Col>
          </Row>
          <Card style={{ width: "18rem" }}>
            <div class="job-category-listing mb-50">
              <div class="single-listing">
                <div class="small-section-tittle2">
                  <h4>Job Category</h4>
                </div>
                <div class="select-job-items2">
                  <select name="select">
                    <option value="">All Category</option>
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
                    <option value="">Category 44444</option>
                  </select>
                </div>
                <div
                  class="select-Categories pt-80 pb-50"
                  style={{ display: "grid" }}
                >
                  <div class="small-section-tittle2">
                    <h4>Job Type</h4>
                  </div>
                  <label >
                    Full Time
                    <input type="checkbox" />
                  </label>
                  <label >
                    Part Time
                    <input type="checkbox"  />
                  </label>
                  <label >
                    Remote
                    <input type="checkbox" />
                  </label>
                  <label >
                    Freelance
                    <input type="checkbox" />
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
                <div
                  class="select-Categories pt-80 pb-50"
                  style={{ display: "grid" }}
                >
                  <div class="small-section-tittle2">
                    <h4>Experience</h4>
                  </div>
                  <label class="container">
                    1-2 Years
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">
                    2-3 Years
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">
                    3-6 Years
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">
                    6-more..
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl={10} lg={10} md={10}>
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
              {jobs.map((item) => (
                <Card
                  style={{ width: "1000px", padding: "10px", margin: "10px" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt="Description of the image"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.recruitmentdescription.jobdescription}
                    </Card.Text>
                    <Link to={`/jobdetail/${item.id}`}>
                      <Button variant="primary">Detail</Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
