import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const BioparchiPage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col md={10} lg={8}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 text-primary mb-3">
              Bioparchi e Fake News: Verità, Miti e Conservazione
            </h1>
            <p className="lead text-muted">
              Scopri come i bioparchi lavorano per la salvaguardia della biodiversità e quali sono le fake news che ostacolano il loro lavoro. 
              Informarsi è il primo passo per sostenere la conservazione!
            </p>
          </motion.div>
        </Col>
      </Row>

      <Row className="align-items-center mt-5">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://www.bioparco.it/wp-content/uploads/2013/12/stampe-cm-30x30_capibara1.jpg"
              alt="Un bioparco"
              className="img-fluid rounded-4 shadow-sm"
            />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-secondary mb-3 text-decoration-underline">Cosa sono i bioparchi?</h2>
            <p className="text-muted">
              I bioparchi sono strutture specializzate che ospitano specie animali per la loro protezione, la conservazione e l'educazione del pubblico. 
              A differenza degli zoo tradizionali, i bioparchi promuovono il benessere animale attraverso ambienti che imitano gli habitat naturali e supportano programmi di ricerca e riproduzione per specie a rischio.
            </p>
            <ul className="list-unstyled lead">
              <li>🌱 Protezione di oltre <strong>10.000 specie animali</strong>.</li>
              <li>🔬 Collaborazioni con <strong>università e ONG</strong>.</li>
              <li>📚 Educazione di milioni di visitatori ogni anno.</li>
            </ul>
          </motion.div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-primary text-center mb-3">Fake News sui Bioparchi</h2>
            <p className="text-muted text-center">
              Molte informazioni false circolano sui bioparchi, alimentando pregiudizi e ostacolando il loro lavoro. Ecco alcune delle fake news più diffuse e le verità che le smontano.
            </p>
            <Row>
              <Col md={6}>
                <div className="mb-4">
                  <h5>❌ <strong>Mito:</strong> I bioparchi maltrattano gli animali.</h5>
                  <p className="text-muted">
                    ✅ <strong>Verità:</strong> I bioparchi moderni rispettano standard elevati per il benessere animale e offrono habitat che replicano le condizioni naturali.
                  </p>
                </div>
                <div className="mb-4">
                  <h5>❌ <strong>Mito:</strong> Non servono a nulla per la conservazione.</h5>
                  <p className="text-muted">
                    ✅ <strong>Verità:</strong> Molti bioparchi partecipano a progetti globali di salvaguardia per specie a rischio e reintroduzione in natura.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-4">
                  <h5>❌ <strong>Mito:</strong> Sono semplici zoo camuffati.</h5>
                  <p className="text-muted">
                    ✅ <strong>Verità:</strong> A differenza degli zoo tradizionali, i bioparchi operano con un approccio scientifico per proteggere gli ecosistemi.
                  </p>
                </div>
                <div className="mb-4">
                  <h5>❌ <strong>Mito:</strong> Gli animali nei bioparchi soffrono.</h5>
                  <p className="text-muted">
                    ✅ <strong>Verità:</strong> Gli animali ricevono cure veterinarie di alto livello e programmi di arricchimento per stimolare comportamenti naturali.
                  </p>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>

      <Row className="align-items-center mt-5">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-secondary mb-3">Come i Bioparchi Aiutano l’Ambiente</h2>
            <p className="text-muted">
              I bioparchi non sono solo luoghi di visita: sono centri attivi nella protezione della fauna selvatica e degli ecosistemi.
            </p>
            <ul className="list-unstyled lead">
              <li>🌍 Progetti di reintroduzione di specie in natura.</li>
              <li>🔬 Ricerca su malattie e biodiversità.</li>
              <li>📢 Educazione del pubblico sull'importanza della sostenibilità.</li>
            </ul>
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://statics.cedscdn.it/photos/MED/42/84/3444284_1547_elefanti_bipoarco_roma.jpg"
              alt="Progetti di conservazione"
              className="img-fluid rounded-4 shadow-sm"
            />
          </motion.div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-primary mb-3">Unisciti alla nostra missione!</h2>
            <p className="text-muted mb-4">
              Sostieni i bioparchi e il loro lavoro per proteggere il pianeta. Informati, visita un bioparco e diffondi la verità!
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/community"
              className="px-4 py-2 rounded-pill btn-hover"
            >
              Lasciaci un messaggio!
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default BioparchiPage;
