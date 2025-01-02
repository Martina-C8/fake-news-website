import React, { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './GuidaVerifica.css';

function GuidaVerifica() {
  const [url, setUrl] = useState('');
  const [verificaSuccesso, setVerificaSuccesso] = useState(null);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleVerifica = (event) => {
    event.preventDefault();
    if (isValidUrl(url)) {
      setVerificaSuccesso(true);
    } else {
      setVerificaSuccesso(false);
    }
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div style={{backgroundColor: 'white', padding: '4rem 0', borderRadius: '70px' }}>
      <Container className="cont guide">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 text-primary"
        >
          Guida alla Verifica delle Fonti
        </motion.h2>

        <Row className="mb-4">
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg rounded-4 border-0">
                <Card.Body>
                  <Card.Title>Verifica l'URL</Card.Title>
                  <form onSubmit={handleVerifica}>
                    <input
                      type="text"
                      value={url}
                      onChange={handleUrlChange}
                      placeholder="Es: https://www.sitoesempio.com"
                      className="form-control mb-3"
                    />
                    <Button variant="primary" type="submit" className="w-100 btn-lg">
                      Verifica
                    </Button>
                  </form>
                  {verificaSuccesso !== null && (
                    <div className="mt-3">
                      {verificaSuccesso ? (
                        <div className="alert alert-success">L'URL inserito è valido! La fonte sembra attendibile.</div>
                      ) : (
                        <div className="alert alert-danger">L'URL inserito non è valido. Assicurati di inserire un URL corretto.</div>
                      )}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Sezione Approfondimenti sulla Verifica delle Fonti */}
        <Row className="mb-4">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg rounded-4 border-0">
                <Card.Body>
                  <Card.Title>Come Verificare una Fonte?</Card.Title>
                  <ul>
                    <li><strong>Controlla l'affidabilità del sito:</strong> Preferisci fonti istituzionali o accademiche.</li>
                    <li><strong>Controlla la data di pubblicazione:</strong> Verifica che le informazioni siano recenti e aggiornate.</li>
                    <li><strong>Cerca più fonti:</strong> Confronta le informazioni per validarle.</li>
                    <li><strong>Verifica l'autore:</strong> È un esperto nel campo? Ricerca il suo profilo.</li>
                  </ul>
                  <Button variant="info" href="https://www.snopes.com/" target="_blank">
                    Leggi di più su Snopes
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg rounded-4 border-0">
                <Card.Body>
                  <Card.Title>Il controllo delle fonti è necessario per la sicurezza</Card.Title>
                  <ul>
                    <li><strong>Affidabilità:</strong> Siti ufficiali e fonti verificate sono essenziali.</li>
                    <li><strong>Impatto:</strong> Verifica come l'informazione potrebbe influenzare il pubblico.</li>
                  </ul>
                  <Button variant="info" href="https://www.factcheck.org/" target="_blank">
                    Scopri FactCheck.org
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Sezione Risorse per Verificare le Fonti */}
        <Row className="mb-4">
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg rounded-4 border-0">
                <Card.Body>
                  <Card.Title>Ulteriori Risorse per Verificare le Fonti</Card.Title>
                  <ul>
                    <li><strong>Snopes:</strong> Un sito web che verifica le voci e le leggende metropolitane.</li>
                    <li><strong>FactCheck.org:</strong> Una risorsa per esaminare le dichiarazioni pubbliche e i fatti.</li>
                    <li><strong>Google Scholar:</strong> Un motore di ricerca per articoli scientifici e accademici.</li>
                    <li><strong>Media Bias/Fact Check:</strong> Strumenti per analizzare le fonti di notizie in base al loro bias politico e credibilità.</li>
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GuidaVerifica;
