import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactJsCalculatorApp from './assets/images/ReactJsCalculatorApp.png';

export function Portfolio() {
  const projects = [
    {
      image: './assets/images/ReactJsCalculatorApp.png',
      title: 'React Calculator App',
      tags: 'React Js, JavaScript, HTML, CSS: Animations & Bootstrap, Netlify',
      button: 'Visit Github', 
      button2: 'Visit Website',
    },
    {
      title: 'React Dictionary App',
      tags: 'React Js, JavaScript, HTML, CSS: Bootstrap, Netlify, External API: (Dictionary API)',
      button: 'Visit Github', 
      button2: 'Visit Website',
    },
    {
      title: 'React Weather App',
      tags: 'React Js, JavaScript, HTML, CSS: Animations & Bootstrap, Netlify, External API: (Weather API)',
      button: 'Visit Github', 
      button2: 'Visit Website',
    },
    {
      title: 'Weather App',
      tags: 'Vanilla JavaScript, HTML, CSS: Bootstrap, Netlify, External API: (Weather API)',
      button: 'Visit Github', 
      button2: 'Visit Website',
    },
    {
      title: 'Online Portfolio',
      tags: 'React Tsx, TypeScript, HTML, CSS: Bootstrap, AWS',
      button: 'Visit Github', 
      button2: 'Visit Website',
    }
  ]
    return ( 
    <section className='portfolio' id='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {projects.map((element, idx) => (
          <Col key={idx}>
          <Card className='card'>
            <Card.Img className='card__image' variant='top' src={element.image}/>
            <Card.Body className='card__body'>
              <Card.Title className='card__title'>{element.title}</Card.Title>
              <Card.Text className='card__tags'>{element.tags}</Card.Text>
              <aside className='card__buttons'>
              <Button className='button card__button card__button--secondary' variant='outline-primary'>{element.button}</Button>
              <Button className='button card__button card__button--primary' variant='primary'>{element.button2}</Button>
              </aside>
              </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </section>
    );
  }
