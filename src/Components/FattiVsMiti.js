import React, { useState } from 'react';
import { Card, Button, Collapse, Alert, Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; 

function FattiVsMiti() {
  const [showAnswer, setShowAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      statement: 'I bioparchi moderni sono dedicati alla conservazione delle specie minacciate e all\'educazione ambientale.',
      isTrue: true,
      source: 'https://www.bioparco.it/il-bioparco-e-leducazione-ambientale/',
      image: 'https://www.greenme.it/wp-content/uploads/2019/05/specie_estinzione.jpg',
    },
    {
      statement: 'L\'energia solare è una fonte di energia rinnovabile che non produce emissioni di gas serra.',
      isTrue: true,
      source: 'https://www.ippo-engineering.eu/tecnologie-ambientali-innovazioni-2022/',
      image: 'https://www.abenergie.it/archivio/img/blog-energia-solare-vantaggi-e-svantaggi-anteprima.jpg',
    },
    {
      statement: 'Le bottiglie di plastica sono biodegradabili e non contribuiscono all\'inquinamento ambientale.',
      isTrue: false,
      source: 'https://www.teknowater.it/impatto-ambientale-inquinamento-bottiglie-plastica/#:~:text=L\'inquinamento%20da%20bottiglie%20di,quasi%20mille%20anni%20per%20disintegrarla.',
      image: 'https://www.itstodini.it/wp-content/uploads/2023/11/quanto-ci-mette-una-bottiglia-d-acqua-a-decomporsi.jpg',
    },
    {
      statement: 'Le energie rinnovabili sono le uniche soluzioni per ridurre l\'impatto del cambiamento climatico.',
      isTrue: false,
      source: 'https://zeroco2.eco/it/magazine/ambiente/energie-rinnovabili-crisi-climatica/',
      image: 'https://energit.it/wp-content/uploads/Che-cosa-sono-le-energie-rinnovabili.jpg',
    },
    {
      statement: 'Le foreste sono essenziali per la biodiversità e per la regolazione del clima.',
      isTrue: true,
      source: 'https://www.wwf.it/foreste/',
      image: 'https://www.igwsrl.com/wp-content/uploads/2022/03/igw-giornata-mondiale-delle-foreste.jpg',
    },
    {
      statement: 'L\'inquinamento atmosferico non ha effetti sulla salute umana.',
      isTrue: false,
      source: 'https://www.arpa.veneto.it/temi-ambientali/aria/approfondimenti/inquinanti-atmosferici',
      image: 'https://ilbolive.unipd.it/sites/default/files/2018-12/inquinamento-aria-smog-morti-premature.png',
    },
    {
      statement: 'Le energie rinnovabili sono fonti di energia che si rigenerano naturalmente e sono sostenibili nel lungo termine.',
      isTrue: true,
      source: 'https://www.enelgreenpower.com/it/learning-hub/energie-rinnovabili',
      image: 'https://www.teampowersrl.it/wp-content/uploads/2018/02/Le-fonti-di-energia-rinnovabile.jpg',
    },
    {
      statement: 'Il cambiamento climatico è un fenomeno naturale che non è influenzato dalle attività umane.',
      isTrue: false,
      source: 'https://climate.ec.europa.eu/climate-change/causes-climate-change_it',
      image: 'https://www.lenergy.it/app/uploads/2024/09/cambiamento-climatico-scaled.jpeg',
    },
    {
      statement: 'Il riciclaggio della plastica è inutile perché la plastica non può essere riutilizzata.',
      isTrue: false,
      source: 'https://www.ippr.it/news-ippr/il-riciclo-e-una-menzogna-i-dati-dicono-il-contrario/',
      image: 'https://www.areyour.org/wp-content/uploads/2021/08/articolo-agosto.jpg',
    },
    {
      statement: 'L\'uso delle energie fossili è l\'unica opzione economica per i paesi in via di sviluppo.',
      isTrue: false,
      source: 'https://www.ippo-engineering.eu/tecnologie-ambientali-innovazioni-2022/',
      image: 'https://d3evrc0h48esvv.cloudfront.net/7506282/combustibili-fossili%20%20-%20small%20card.jpg?w=500&h=314&q=60&t=1696346695135',
    },
    {
      statement: 'I bioparchi sono strutture obsolete che danneggiano gli animali.',
      isTrue: false,
      source: 'https://latpc.altervista.org/proteggere-la-biodiversita-parte-prima-i-bioparchi/?doing_wp_cron=1735834123.8964920043945312500000',
      image: 'https://www.viaggiamo.it/wp-content/uploads/2015/12/casa_delle_farfalle.jpg',
    },
    {
      statement: 'L\'agricoltura intensiva è sostenibile e non impatta sull\'ambiente.',
      isTrue: false,
      source: 'https://ilgiornaledellambiente.it/agricoltura-e-ambiente/#:~:text=Impatto%20ambientale%20dell\'agricoltura%20intensiva,acide%20e%20conseguenti%20cambiamenti%20climatici.',
      image: 'https://www.meteoweb.eu/wp-content/uploads/2024/02/agricoltura-intensiva-1-1200x686.webp',
    },
    {
      statement: 'I cambiamenti climatici sono causati principalmente dalla deforestazione e dalla perdita di habitat.',
      isTrue: true,
      source: 'https://www.myclimate.org/it-ch/informarsi/dettaglio-faq/qual-e-la-correlazione-tra-la-crisi-climatica-e-la-perdita-di-biodiversita/',
      image: 'https://www.agenda.unict.it/img/articoli/15681.jpg',
    },
    {
      statement: 'Le plastiche biodegradabili sono una soluzione efficace per l\'inquinamento da plastica.',
      isTrue: false,
      source: 'https://economiacircolare.com/bioplastiche-inchiesta-time/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbL785aKhG0piyxaMaogarXokpNQ2MPaKWQ&s',
    },
    {
      statement: 'La transizione energetica è la chiave per combattere il cambiamento climatico.',
      isTrue: true,
      source: 'https://www.ippo-engineering.eu/tecnologie-ambientali-innovazioni-2022/',
      image: 'https://www.lumi4innovation.it/app/uploads/2022/05/transizione-energetica-verso-modello-consumo-sostenibile-efficiente-pulito.png',
    },
    {
      statement: 'Il trasporto pubblico è una delle soluzioni più efficaci per ridurre l\'inquinamento atmosferico.',
      isTrue: true,
      source: 'https://www.otovo.it/blog/mobilita-sostenibile/',
      image: 'https://img.economyup.it/wp-content/uploads/2020/09/shutterstock_1462012364.jpg',
    },
    {
      statement: 'I bioparchi sono la causa dell\'abbattimento di alberi nelle foreste.',
      isTrue: false,
      source: 'https://zeroco2.eco/it/magazine/ambiente/riforestazione-biodiversita/',
      image: 'https://www.bioparco.it/wp-content/uploads/2021/03/MDG_8430-alb-pht.jpg',
    },
    {
      statement: 'Il mercato del carbonio è un sistema che consente di ridurre le emissioni di gas serra.',
      isTrue: true,
      source: 'https://www.xclimate.net/blog/mercato-del-carbonio/#:~:text=Il%20mercato%20del%20carbonio%20%C3%A8%20un%20sistema%20di%20scambio%20di,delle%20emissioni%20di%20CO2%20equivalente.',
      image: 'https://euractiv.it/wp-content/uploads/sites/11/2021/05/Carbon-price-1024x576-1.jpg',
    },
    {
      statement: 'Le campagne di sensibilizzazione sul cambiamento climatico sono inutili.',
      isTrue: false,
      source: 'https://climate-adapt.eea.europa.eu/it/metadata/adaptation-options/awareness-campaigns-for-behavioural-change',
      image: 'https://www.climalteranti.it/wp-content/uploads/2017/08/Diff-ADV.jpg',
    },
    {
      statement: 'Le microplastiche sono una delle principali cause di inquinamento marino.',
      isTrue: true,
      source: 'https://www.marionegri.it/magazine/inquinamento-da-microplastiche#:~:text=Grandi%20quantit%C3%A0%20di%20plastica%20sono,acque%20di%20mari%20e%20laghi.',
      image: 'https://www.veterinariapreventiva.it/wp-content/uploads/2019/03/microplastiche.jpg',
    },
    {
      statement: 'La biodiversità non è influenzata dalle attività umane.',
      isTrue: false,
      source: 'https://www.enelgreenpower.com/it/learning-hub/sviluppo-sostenibile/biodiversita',
      image: 'https://www.meteoweb.eu/wp-content/uploads/2023/12/cose-la-biodiversita-1-1200x686.jpg',
    },
  ];

  const handleAnswer = (isTrue, index) => {
    setIsCorrect(isTrue === questions[index].isTrue);
    setShowAnswer(index);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-primary">Fatti vs Miti Ambientali</h2>
      {questions.map((question, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-4 shadow-lg rounded-4 border-0 d-flex justify-content-center " style={{ minHeight: '250px' }}>
            <Row className="w-100">
              <Col md={6} className="d-flex justify-content-center align-items-center">
                {question.image ? (
                  <img src={question.image} alt="Immagine" className="rounded" style={{ width: '100%', height: 'auto'}} />
                ) : (
                  <div className="w-100" style={{ height: '200px', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span>Immagine</span> 
                  </div>
                )}
              </Col>
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <Card.Body className="text-center">
                  <Card.Title>{question.statement}</Card.Title>
                  <div className="mb-3 d-flex gap-2 justify-content-center">
                    <Button 
                      variant="success" 
                      onClick={() => handleAnswer(true, index)} 
                      className="w-auto py-3"
                    >
                      Vero
                    </Button>
                    <Button 
                      variant="danger" 
                      onClick={() => handleAnswer(false, index)} 
                      className="w-auto py-3"
                    >
                      Falso
                    </Button>
                  </div>
                  <Collapse in={showAnswer === index}>
                    <div className="mt-3">
                      {isCorrect !== null && (
                        <Alert variant={isCorrect ? 'success' : 'danger'}>
                          {isCorrect ? 'Risposta corretta!' : 'Risposta errata.'}
                          <p>Per maggiori dettagli, leggi <a href={question.source} target="_blank" rel="noopener noreferrer">questo articolo</a></p>
                        </Alert>
                      )}
                    </div>
                  </Collapse>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </motion.div>
      ))}
    </Container>
  );
}

export default FattiVsMiti;
