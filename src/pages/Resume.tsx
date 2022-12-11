import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Contact } from './Contact';

export function Resume() {
  const techStack = [
    {
      title: 'Languages',
      body: 'JavaScript, TypeScript, HTML, CSS',
    },
    {
      title: 'Frontend',
      body: 'React, Redux, jQuery, Bootstrap',
      title2: 'Test',
      body2: 'Mocha, Jest',
    },
    {
      title: 'Backend',
      body: 'NodeJs, ExpressJs, Axios, Nodemon, REST, GraphQL, MongoDB, PostgresSQL',
    }
  ]
  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noreferrer');
  };
    return (
      <>
        <aside>
          <h2> Resume </h2>
          <p>My BA Hons in Communication Design from The Glasgow School of Art, <br /> allows me to develop digital products through research and design.</p>
          <p>With 6 plus years as a UX/UI Designer, I decided to move forward to the Tech world as a Frontend Developer. <br /> 
          I'm currently a Consultant Frontend Developer, based in Stockholm, Sweden. Feel free to view my resume and my tech stack below.</p>
          <Button onClick={() => openInNewTab('https://www.linkedin.com/in/katy-rosli-761b70185/')}>
          View Resume
          </Button>
          <Row xs={1} md={3} className='g-4'>
          {techStack.map((element, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>{element.body}</Card.Text>
                  {element.title2 && <> <Card.Title>{element.title2}</Card.Title> 
                  <Card.Text>{element.body2}</Card.Text>
                  </>}
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
        </aside>
        <Contact />
      </>
    ) 
  }