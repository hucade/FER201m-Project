import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import {HeaderStyle, JobDetail, JobListing, About, Contact} from "./View/Component/index"

function App() {
  return (
      <Container>
        <HeaderStyle />
        <Row>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/JobDetail" element={<JobDetail />} />
            <Route path="/JobListing" element={<JobListing />} />
          </Routes>
        </Row>
      </Container>
  );
}

export default App;
