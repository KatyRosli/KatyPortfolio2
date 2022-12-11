import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function Portfolio() {
  const projects = [
    {
      image: 'ImageHere',
      title: 'React Calculator App',
      body: 'An app that allows Users to calculate any numbers and the results will be shown after clicking the equal button. This project also shows my strength as a UI Developer as I created a subtle animation as the background.',
      tags: 'React Js, JavaScript, HTML, CSS: Animations & Bootstrap, Netlify',
      button: 'Visit Github', 
      button2: 'Visit Project',
    },
    {
      image: 'ImageHere',
      title: 'React Dictionary App',
      body: 'An app that allows Users to search for any words and the result will show the meanings, images and sounds that pronounced the word',
      tags: 'React Js, JavaScript, HTML, CSS: Bootstrap, Netlify, External API: (Dictionary API)',
      button: 'Visit Github', 
      button2: 'Visit Project',
    },
    {
      image: 'ImageHere',
      title: 'React Weather App',
      body: 'An app that detacts User current location and display real time weather forecast.',
      tags: 'React Js, JavaScript, HTML, CSS: Animations & Bootstrap, Netlify, External API: (Weather API)',
      button: 'Visit Github', 
      button2: 'Visit Project',
    },
    {
      image: 'ImageHere',
      title: 'Weather App',
      body: 'An app that detacts User current location and display real time weather forecast.',
      tags: 'Vanilla JavaScript, HTML, CSS: Bootstrap, Netlify, External API: (Weather API)',
      button: 'Visit Github', 
      button2: 'Visit Project',
    },
    {
      image: 'ImageHere',
      title: 'Online Portfolio',
      body: 'A responsive online portfolio that showcase all my latest projects as a Developer.',
      tags: 'Vanilla JavaScript, HTML, CSS: Bootstrap, AWS',
      button: 'Visit Github', 
      button2: 'Visit Project',
    }
  ]
    return ( 
    <section id='portfolio'>
      <h2> Portfolio </h2>
      <Row xs={1} md={3} className='g-4'>
        {projects.map((element, idx) => (
          <Col key={idx}>
          <Card>
            <Card.Img variant='top' src='holder.js/100px180'/>
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
              <Card.Text>{element.body}</Card.Text>
              <Card.Text>{element.tags}</Card.Text>
              <Button variant='outline-primary'>{element.button}</Button>
              <Button variant='primary'>{element.button2}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </section>

    );
  }