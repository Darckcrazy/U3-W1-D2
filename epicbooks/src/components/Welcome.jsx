import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Welcome = () => (
  <Container fluid className="p-0">
    <Alert
      variant="info"
      className="rounded-0 py-5 mb-0 text-center shadow"
      style={{
        fontSize: '1.5rem',
        background: 'linear-gradient(90deg, #a8edea 0%, #fed6e3 100%)',
        border: 'none',
      }}
    >
      <h1 className="display-4 fw-bold mb-3" style={{ color: '#0d6efd' }}>
        Benvenuto su EpicBooks!
      </h1>
      <p className="lead mb-4" style={{ color: '#333' }}>
        Il miglior shop online per i tuoi libri preferiti.
      </p>
      <h4 className="fw-semibold" style={{ color: '#0d6efd' }}>
        Scopri le nostre offerte e le ultime novità!
      </h4>
    </Alert>
  </Container>
);

export default Welcome;