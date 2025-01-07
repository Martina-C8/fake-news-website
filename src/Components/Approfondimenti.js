import React from 'react';
import { Card, Button, Row, Col, Container, Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion'; 
import './Approfondimenti.css'; 

function Approfondimenti() {
  return (
    <div>
      <Container className="mt-4">
        <motion.h2
          className="text-center mb-4 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Approfondimenti sul Cambiamento Climatico e la Biodiversità
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
                  <Card.Title>Studi sulla Biodiversità</Card.Title>
                  <Card.Text>
                    Esplora articoli scientifici, report e studi sulle strategie di conservazione della biodiversità,
                    con un focus particolare sulle specie minacciate e sugli ecosistemi vulnerabili.
                  </Card.Text>
                  <Button variant="secondary" href="https://www.wwf.it/foreste/" target="_blank">Leggi gli articoli</Button>
                </Card.Body>
                <motion.img
                  src="https://www.ecopa.it/wp-content/uploads/2023/12/volumetric-drop-with-ecosystem-inside-generative-ai.jpg" // Inserisci il link dell'immagine qui
                  alt="Biodiversità"
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
                  <Card.Title>Approfondimenti sul Cambiamento Climatico</Card.Title>
                  <Card.Text>
                    Scopri gli ultimi studi e articoli sul cambiamento climatico, le sue cause e soluzioni possibili, inclusi i dati sul riscaldamento globale e le politiche climatiche globali.
                  </Card.Text>
                  <Button variant="secondary" href="https://www.ipcc.ch/" target="_blank">Esplora gli studi</Button>
                </Card.Body>
                <motion.img
                  src="https://sigmaearth.com/wp-content/uploads/2024/01/Climate-Change-Is-A-Fact.png" 
                  alt="Cambiamento Climatico"
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
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg rounded-4 border-0">
                <Card.Body>
                  <Card.Title>Risorse Multimediali</Card.Title>
                  <Card.Text>
                    Visualizza documentari, video informativi e webinar su temi come la biodiversità, le energie rinnovabili e il cambiamento climatico.
                  </Card.Text>
                  <Button variant="info" href="https://www.youtube.com/user/WWF" target="_blank">Guarda i video</Button>
                </Card.Body>
                
              </Card>
            </motion.div>
          </Col>
        </Row>
        
<Row className="mb-4">
  <Col md={12}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Cos'è la biodiversità?</Accordion.Header>
          <Accordion.Body>
            La biodiversità si riferisce alla varietà di vita sulla Terra, inclusi gli ecosistemi, le specie animali e vegetali e la diversità genetica che li sostiene.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Come posso contribuire alla conservazione della biodiversità?</Accordion.Header>
          <Accordion.Body>
            Alcuni modi per contribuire includono la riduzione del consumo di plastica, il supporto a organizzazioni ambientaliste e l'adozione di pratiche sostenibili nel quotidiano.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Che cosa sono le energie rinnovabili?</Accordion.Header>
          <Accordion.Body>
            Le energie rinnovabili sono fonti di energia che si rigenerano naturalmente, come il sole, il vento e l'acqua, e sono più sostenibili rispetto alle fonti fossili.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Cos'è il cambiamento climatico?</Accordion.Header>
          <Accordion.Body>
            Il cambiamento climatico si riferisce alle modifiche a lungo termine delle temperature globali e dei modelli climatici, principalmente causato dalle attività umane, come la combustione di combustibili fossili.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Perché è importante proteggere gli ecosistemi?</Accordion.Header>
          <Accordion.Body>
            Gli ecosistemi forniscono servizi fondamentali, come la purificazione dell'acqua, l'impollinazione delle piante e la regolazione del clima. La loro protezione è essenziale per mantenere la vita sulla Terra.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Cos'è la deforestazione?</Accordion.Header>
          <Accordion.Body>
            La deforestazione è la distruzione o la riduzione della superficie forestale, che contribuisce alla perdita di biodiversità e al cambiamento climatico.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Cosa sono le specie in via di estinzione?</Accordion.Header>
          <Accordion.Body>
            Le specie in via di estinzione sono quelle che stanno rapidamente diminuendo in numero a causa di fattori come la caccia, la perdita di habitat e il cambiamento climatico.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Come funziona il riciclaggio?</Accordion.Header>
          <Accordion.Body>
            Il riciclaggio è il processo di recupero dei materiali dai rifiuti per produrre nuovi prodotti, riducendo così la necessità di risorse naturali e diminuendo l'inquinamento.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Quali sono gli effetti dell'inquinamento atmosferico sulla salute?</Accordion.Header>
          <Accordion.Body>
            L'inquinamento atmosferico può causare gravi problemi respiratori, malattie cardiovascolari e aumentare il rischio di cancro ai polmoni.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Perché è importante la tutela degli oceani?</Accordion.Header>
          <Accordion.Body>
            Gli oceani sono vitali per la regolazione del clima, la biodiversità e l'approvvigionamento di cibo. La loro protezione è essenziale per garantire un futuro sano per il nostro pianeta.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
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
                  <Card.Title>Link Utili</Card.Title>
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

        <Row className="mb-4">
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg rounded-4 border-0">
                <Card.Body>
                  <Card.Title>Contattaci per Maggiori Info</Card.Title>
                  <Card.Text>
                    Hai domande o desideri ulteriori informazioni? Non esitare a contattarci tramite il nostro modulo di contatto o attraverso i social media.
                  </Card.Text>
                  <Button variant="primary" href="/community">Contattaci</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Approfondimenti;
