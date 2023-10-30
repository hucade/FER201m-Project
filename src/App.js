import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { Header, JobDetail, JobListing, About, Contact, HomePage, PostJob, ApplyJobs, Footer, Login, Register } from "./View/Component/index"

function App() {
  return (
    <Container fluid>
      <Col>
        <Header></Header>
        <Row>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobdetail/:id" element={<JobDetail />} />
            <Route path="/JobListing" element={<JobListing />} />
            <Route path="/postJob" element={<PostJob />} />
            <Route path="/applyjob" element={<ApplyJobs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Row>
        <Footer></Footer>
      </Col>
    </Container>
  );
}

export default App;
