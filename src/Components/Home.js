import React from 'react';
import { Container, Card, Button, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion'; 

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card className="shadow-lg rounded-4 p-4 border-0">
              <Card.Body className="text-center">
                <Image 
                  src="https://www.messingschlager.com/content/img/teaser/xteaser_umweltbewusstsein.jpg.pagespeed.ic.Fe7bgd6KXC.jpg" 
                  alt="Immagine di consapevolezza ambientale" 
                  className="img-fluid mb-4 home-img" 
                  style={{objectFit: 'cover' }} 
                />
                <Card.Title className="display-4 text-primary mb-3">
                  Benvenuti nel sito anti fake news!
                </Card.Title>
                <Card.Text className="lead text-muted mb-4">
                  Le fake news ambientali sono un problema crescente che influenza la percezione del pubblico riguardo le tematiche cruciali come la conservazione della biodiversità, il cambiamento climatico e il ruolo dei bioparchi. Questo sito è progettato per aiutarti a distinguere tra fatti scientifici e disinformazione.
                </Card.Text>
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="/fatti-vs-miti" 
                  className="px-4 py-2 rounded-pill btn-hover">
                  Scopri di più
                </Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
