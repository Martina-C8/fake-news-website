import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col md={10} lg={8}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://www.messingschlager.com/content/img/teaser/xteaser_umweltbewusstsein.jpg.pagespeed.ic.Fe7bgd6KXC.jpg"
              alt="Immagine di consapevolezza ambientale"
              className="img-fluid mb-4 home-img rounded-4"
              style={{ objectFit: 'cover' }}
            />
            <h1 className="display-4 text-primary mb-3">
              Benvenuti nel sito anti fake news!
            </h1>
            <p className="lead mb-4">
              Le fake news ambientali stanno danneggiando la nostra capacità di comprendere e affrontare problemi cruciali come il cambiamento climatico, la biodiversità e la sostenibilità. Qui troverai strumenti per distinguere i fatti dalla disinformazione.
            </p>
          </motion.div>
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-5">
        <Col md={8} lg={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-secondary mb-3">Perché questo sito è <strong>importante</strong>?</h2>
            <p className="text-muted mb-4">
              Viviamo in un'epoca in cui le notizie false si diffondono più velocemente della verità. Le conseguenze possono essere devastanti, soprattutto quando riguardano il nostro pianeta. La missione di questo sito è educare e sensibilizzare sull'importanza di verificare le fonti e di sostenere informazioni basate su dati scientifici.
            </p>
          </motion.div>
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-5">
        <Col md={10} lg={8}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h2 className="text-secondary mb-3">Unisciti al cambiamento!</h2>
            <p className="text-muted mb-4">
              La lotta contro la disinformazione è una battaglia che possiamo vincere solo insieme. Condividi la conoscenza, verifica le notizie e diventa parte attiva della comunità che protegge il nostro pianeta dalle bugie. 
            </p>
            <Button
              variant="success"
              size="smß"
              href="/community"
              className="px-4 py-2 rounded-pill btn-hover">
              Unisciti a noi
            </Button>
          </motion.div>
        </Col>
      </Row>
        {/* Google Form */}
        <Row className="justify-content-center text-center mt-5">
        <Col md={10} lg={8}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-primary mb-3">La tua opinione è importante</h2>
            <p className="text-muted mb-4">
              Compila il modulo qui sotto per condividere il tuo punto di vista sulle fake news ambientali.
            </p>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeJVviI2jo71QJG2Ah6ULN4eOVoCBtPzcAHODmahp6fHjOygw/viewform?embedded=true" 
              width="100%" 
              height="570px" 
              title="Google Form">
              Caricamento…
            </iframe>
          </motion.div>
        </Col>
      </Row>
      {/* <Row className="justify-content-center mt-5">
        <Col md={10} lg={8}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-primary mb-3">Cosa troverai qui:</h2>
            <ul className="list-unstyled text-muted lead">
              <li className="mb-3">
                <strong><Link to="/fatti-vs-miti" className="text-dark text-decoration-underline">Fatti vs Miti</Link></strong>: Smontiamo le fake news più comuni sull'ambiente con un approccio divertente.
              </li>
              <li className="mb-3">
                <strong><Link to="/approfondimenti" className="text-dark text-decoration-underline">Approfondimenti</Link></strong>: Risposte a domande più comuni, video e guide sull'ambiente.
              </li>
              <li className="mb-3">
                <strong><Link to="/guida-verifica" className="text-dark text-decoration-underline">Guida alla verifica</Link></strong>: Un ottimo modo per misurare la veridicità di un URL e altre informazioni utili.
              </li>
              <li className="mb-3">
                <strong><Link to="/risorse-multimediali" className="text-dark text-decoration-underline">Risorse multimediali</Link></strong>: Un ottimo modo per misurare la veridicità di un URL e altre informazioni utili.
              </li>
              <li className="mb-3">
                <strong><Link to="/BioparchiPage" className="text-dark text-decoration-underline">Bioparchi</Link></strong>: Breve introduzione ai bioparchi e alle Fake News che ne riguardano.
              </li>
            </ul>
            <Button
              variant="success"
              size="sm"
              href="/fatti-vs-miti"
              className="px-4 py-2 rounded-pill btn-hover">
              Esplora ora
            </Button>
          </motion.div>
        </Col>
      </Row> */}

    </Container>
  );
};

export default Home;
