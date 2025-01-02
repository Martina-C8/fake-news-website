import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center">
          <Col md={6}>
            <img src={"https://ctenext.it/wp-content/uploads/2021/09/logo_unito_new.webp"} alt="Logo di Università degli studi di Torino" className="img-fluid" 
            style={{ width: '200px', height: 'auto' }}/>
            <hr />
            <h5>Università degli studi di Torino</h5>
          </Col>
          <Col md={6}>
            <h5>Martina Casetta</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">LM 38 - Lingue straniere per la comunicazione internazionale</a></li>
              <li><a href="/about" className="text-light">Matricola 863747</a></li>
              <li><a href="/contact" className="text-light">Dissertazione magistrale - Proposta sito web</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
