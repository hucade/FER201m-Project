import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import { HeaderStyle, JobDetail, JobListing, About, Contact, HomePage, PostJob, ApplyJobs } from "./View/Component/index"

function App() {
  return (
    <Container>

      <Row>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/JobDetail" element={<JobDetail />} />
          <Route path="/JobListing" element={<JobListing />} />
          <Route path="/PostJob" element={<PostJob />} />
          <Route path="/applyjob" element={<ApplyJobs />} />
        </Routes>
      </Row>
    </Container>
  );
}

export default App;
