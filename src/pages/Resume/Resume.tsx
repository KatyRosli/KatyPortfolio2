import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Contact } from '../Contact/Contact';
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker';

export function Resume() {
  const gaEventTracker = useAnalyticsEventTracker('Resume');
  const techStack = [
    {
      title: 'Languages:',
      body: 'TypeScript, JavaScript, Java, Python, CSS, SCSS',
    },
    {
      title: 'Frontend:',
      body: 'React Js, Next Js, Vue Js, Angular, Redux, jQuery, Bootstrap, Tailwind, React Native',
      title2: 'Test:',
      body2: 'Mocha, Jest, Jasmine, Karma',
    },
    {
      title: 'Backend:',
      body: 'NodeJs, ExpressJs, Axios, Nodemon, REST, GraphQL, MongoDB, PostgresSQL, Strapi, Sanity',
    }
  ]
  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noreferrer');
  };
    return (
      <section className='resume' id='resume'>
        <aside className='resume__container'>
          <h2 className='resume__title'>Resume</h2>
          <p className='resume__body'>My BA Hons in Communication Design from The Glasgow School of Art, allows me to develop digital products through research and design. With more than 7 plus years as a UX/UI Designer, I decided to move forward to the Tech world as a Frontend Developer. <br /> 
          <br />I am currently employed as a Frontend Developer in Stockholm, Sweden. My work involves creating intuitive and visually appealing user interfaces (UX and UI design) for web applications. Feel free to view my resume and my tech stack below.</p>
          <Button className='button resume__button resume__button--primary' variant='primary' onClick={() => {
            gaEventTracker('buttonClick', 'Visit Resume LinkedIn');
            openInNewTab('https://www.linkedin.com/in/katy-rosli-761b70185/');
          }}>View Resume</Button>
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