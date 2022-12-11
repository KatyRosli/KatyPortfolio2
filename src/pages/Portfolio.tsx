import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function Portfolio() {
  // list
    return ( 
    <section id='portfolio'>
      <h2> Portfolio </h2>
      <Row xs={1} md={3} className='g-4'>
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
          <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </section>

    );
  }