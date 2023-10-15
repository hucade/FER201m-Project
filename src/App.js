import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import {HeaderStyle} from "./View/Component/index"
import About from './View/Component/About';
import Contact from './View/Component/Contact';
function App() {
  return (
      <Container>
        <HeaderStyle />
        <Row>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Row>
      </Container>
  );
}

export default App;
