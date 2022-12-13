import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Contact } from './Contact';

export function Resume() {
  const techStack = [
    {
      title: 'Languages:',
      body: 'JavaScript, TypeScript, HTML, CSS',
    },
    {
      title: 'Frontend:',
      body: 'React, Redux, NextJs, jQuery, Bootstrap',
      title2: 'Test:',
      body2: 'Mocha, Jest',
    },
    {
      title: 'Backend:',
      body: 'NodeJs, ExpressJs, Axios, Nodemon, REST, GraphQL, MongoDB, PostgresSQL',
    }
  ]
  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noreferrer');
  };
    return (
      <section className='resume' id='resume'>
        <aside className='resume__container'>
          <h2 className='resume__title'>Resume</h2>
          <p className='resume__body'>My BA Hons in Communication Design from The Glasgow School of Art, allows me to develop digital products through research and design. With 6 plus years as a UX/UI Designer, I decided to move forward to the Tech world as a Frontend Developer. <br /> 
          <br />I'm currently a Consultant Developer, based in Stockholm, Sweden. Feel free to view my resume and my tech stack below.</p>
          <Button className='button resume__button resume__button--primary' variant='primary' onClick={() => openInNewTab('https://www.linkedin.com/in/katy-rosli-761b70185/')}>View Resume</Button>
          </aside>
          <Row xs={1} md={3} className='g-4'>
          {techStack.map((element, idx) => (
            <Col key={idx}>
              <Card className='techstack'>
                <Card.Body className='techstack__container'>
                  <Card.Title className='techstack__title'>{element.title}</Card.Title>
                  <Card.Text className='techstack__body'>{element.body}</Card.Text>
                  {element.title2 && <> <Card.Title className='techstack__title'>{element.title2}</Card.Title> 
                  <Card.Text className='techstack__content'>{element.body2}</Card.Text>
                  </>}
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
        <Contact />
      </section>
    ) 
  }