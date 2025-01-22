import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

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
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
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
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/BioparchiPage">
                I Bioparchi
              </Nav.Link>
              <Nav.Link as={NavLink} to="/fatti-vs-miti">
                Fatti vs Miti
              </Nav.Link>
              <Nav.Link as={NavLink} to="/approfondimenti">
                Approfondimenti
              </Nav.Link>
              <Nav.Link as={NavLink} to="/guida-verifica">
                Guida alla Verifica
              </Nav.Link>
              <Nav.Link as={NavLink} to="/risorse-multimediali">
                Risorse Multimediali
              </Nav.Link>
              <Nav.Link as={NavLink} to="/community">
                Community
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BioparchiPage" element={<BioparchiPage />} />
          <Route path="/fatti-vs-miti" element={<FattiVsMiti />} />
          <Route path="/approfondimenti" element={<Approfondimenti />} />
          <Route path="/guida-verifica" element={<GuidaVerifica />} />
          <Route path="/risorse-multimediali" element={<RisorseMultimediali />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
