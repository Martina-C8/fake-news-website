import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from './Components/Home';
import FattiVsMiti from './Components/FattiVsMiti';
import Approfondimenti from './Components/Approfondimenti';
import GuidaVerifica from './Components/GuidaVerifica';
import RisorseMultimediali from './Components/RisorseMultimediali';
import Community from './Components/Community';
import Footer from './Components/Footer';
import BioparchiPage from './Components/BioparchiPage';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/022/228/110/non_2x/earth-green-environmentally-icon-free-png.png" 
              alt="Logo" 
              style={{ width: '40px', height: 'auto', marginRight: '10px' }} 
            />
            Ambiente e Fake News
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/fatti-vs-miti">Fatti vs Miti</Nav.Link>
              <Nav.Link href="/approfondimenti">Approfondimenti</Nav.Link>
              <Nav.Link href="/guida-verifica">Guida alla Verifica</Nav.Link>
              <Nav.Link href="/risorse-multimediali">Risorse Multimediali</Nav.Link>
              <Nav.Link href="/community">Community</Nav.Link>
              <Nav.Link href="/BioparchiPage">I Bioparchi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fatti-vs-miti" element={<FattiVsMiti />} />
          <Route path="/approfondimenti" element={<Approfondimenti />} />
          <Route path="/guida-verifica" element={<GuidaVerifica />} />
          <Route path="/risorse-multimediali" element={<RisorseMultimediali />} />
          <Route path="/community" element={<Community />} />
          <Route path="/BioparchiPage" element={<BioparchiPage />} />
        </Routes>
      </Container>
      
      <Footer />
    </Router>
  );
}

export default App;
