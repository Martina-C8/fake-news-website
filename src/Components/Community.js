import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Community.css'; 

function Community() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [fromName, setFromName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === '' || email.trim() === '' || fromName.trim() === '') {
      setError('Il messaggio, il nome e la tua email sono obbligatori.');
      return;
    }

    setError('');

    emailjs.send(
      'service_vzxyvve', 
      'template_zn4dsns', 
      {
        message: message,
        user_email: email,
        from_name: fromName  
      },
      '1bImkLNklUYF2b0fC'  
    ).then((response) => {
      setShowSuccess(true);
      setMessage('');
      setEmail('');
      setFromName('');

      setTimeout(() => setShowSuccess(false), 2000);
    }).catch((error) => {
      setError('C’è stato un errore durante l’invio del messaggio. Riprova.');
    });
  };

  return (
    <div className="community-container">
      <div className="intro-section">
        <img src="https://blog.empuls.io/it/content/images/2023/09/manager-feedback-.png" alt="Feedback e Domande" className="img-fluid img-community" />
        <p className="intro-text">
          Le tue domande e il tuo feedback sono molto importanti per noi! Non esitare a chiedere qualsiasi informazione o a condividere il tuo pensiero. <b>Il tuo contributo ci aiuta a migliorare e a crescere.</b>
        </p>
      </div>

      <h2 className="community-title">Community e Feedback</h2>

      {showSuccess && (
        <Alert variant="success" className="alert-custom">
          Messaggio inviato con successo!
        </Alert>
      )}

      {error && <Alert variant="danger" className="alert-custom">{error}</Alert>}

      <Form onSubmit={handleSubmit} className="form-custom">
        <Form.Group controlId="from_name">
          <Form.Label className="form-label">Il tuo nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo nome"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            className="form-control-custom"
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className="form-label">La tua email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Inserisci la tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control-custom"
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label className="form-label">Il tuo messaggio</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Scrivi qui il tuo messaggio..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control-custom"
          />
        </Form.Group>

        <Button className="button-feedback" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
}

export default Community;
