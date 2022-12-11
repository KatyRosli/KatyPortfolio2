import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Contact } from './Contact';

export function Resume() {
    return (
      <>
        <aside>
          <h2> Resume </h2>
          <p>My BA Hons in Communication Design from The Glasgow School of Art, <br /> allows me to develop digital products through research and design.</p>
          <p>With 6 plus years as a UX/UI Designer, I decided to move forward to the Tech world as a Frontend Developer. <br /> 
          I'm currently a Consultant Frontend Developer, based in Stockholm, Sweden. Feel free to view my resume and my tech stack.</p>
          <Button>
          View Resume
          </Button>
          <Row xs={1} md={3} className='g-4'>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
            <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            </Col>
          ))}
          </Row>
        </aside>
        <Contact />
      </>
    ) 
  }