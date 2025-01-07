import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; 
import './RisorseMultimediali.css'; 

function RisorseMultimediali() {
  return (
    <div>
      <Container className="mt-4 cont">
        <motion.h2
          className="text-center mb-4 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Risorse Multimediali
        </motion.h2>

        <Row className="mb-4">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg rounded-4 border-0">
                <Card.Body>
                  <Card.Title>Come Combattere le Fake News</Card.Title>
                  <Card.Text>
                    Scopri le strategie per identificare e combattere le fake news.
                  </Card.Text>
                  <Button variant="primary" href="https://www.youtube.com/watch?v=KY6vUS5d5WQ" target="_blank">Guarda il Video</Button>
                </Card.Body>
                <motion.img
                  src="https://content.kaspersky-labs.com/se/com/content/en-global/images/repository/isc/2021/how-to-identify-fake-news-1/how-to-identify-fake-news-1.jpg"
                  alt="Fake News"
                  className="img-fluid rounded-4 mt-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                />
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
                  <Card.Title>La Biodiversità e il suo Valore</Card.Title>
                  <Card.Text>
                    Un viaggio attraverso l'importanza della biodiversità nel nostro ecosistema.
                  </Card.Text>
                  <Button variant="primary" href="https://www.youtube.com/watch?v=t0CNcZRPfDo" target="_blank">Guarda il Video</Button>
                </Card.Body>
                <motion.img
                  src="https://agribisele.it/wp-content/uploads/2021/04/shutterstock_1663450267_m-1024x500.jpg"
                  alt="Biodiversità"
                  className="img-fluid rounded-4 mt-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg rounded-4 border-0">
                <Card.Body>
                  <Card.Title>Come Riconoscere le Fake News</Card.Title>
                  <Card.Text>
                    Una guida pratica per riconoscerle.
                  </Card.Text>
                  <Button variant="success" href="/Come_Riconoscere_Le_Fake_News.pdf" target="_blank">Scarica il PDF</Button>
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
                  <Card.Title>La Biodiversità in Numeri</Card.Title>
                  <Card.Text>
                    Dati e statistiche sull'importanza della biodiversità.
                  </Card.Text>
                  <Button variant="success" href="/Biodiversità_in_Numeri.pdf" target="_blank">Scarica il PDF</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg rounded-4 border-0">
                <Card.Body>
                  <Card.Title>Link Utili per Approfondire</Card.Title>
                  <Card.Text>
                    Approfondisci ulteriormente questi argomenti visitando i seguenti link:
                  </Card.Text>
                  <ul>
                    <li><a href="https://www.wwf.it/foreste/" target="_blank" rel="noopener noreferrer">WWF - Foreste</a></li>
                    <li><a href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer">Intergovernmental Panel on Climate Change (IPCC)</a></li>
                    <li><a href="https://www.greenpeace.org/italy/it/" target="_blank" rel="noopener noreferrer">Greenpeace Italia</a></li>
                    <li><a href="https://www.un.org/sustainabledevelopment/climate-change/" target="_blank" rel="noopener noreferrer">United Nations - Climate Change</a></li>
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

export default RisorseMultimediali;
