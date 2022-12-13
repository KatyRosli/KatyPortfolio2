import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactJsCalculatorApp from '../assets/images/ReactJsCalculatorApp.svg';
import ReactJsDictionaryApp from '../assets/images/ReactJsDictionaryApp.svg';
import ReactJsWeatherApp from '../assets/images/ReactJsWeatherApp.svg';
import VanillaJsWeatherApp from '../assets/images/VanillaJsWeatherApp.svg';
import OnlinePortfolio from '../assets/images/OnlinePortfolio.svg';

export function Portfolio() {
  const projects = [
    {
      image: ReactJsCalculatorApp,
      title: 'React Calculator App',
      tags: 'React Js, JavaScript, HTML, CSS: Animations & Bootstrap, Netlify',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/calculator-react',
      button2: 'Visit Website',
      website: 'https://zealous-babbage-243b8d.netlify.app/',
    },
    {
      image: ReactJsDictionaryApp,
      title: 'React Dictionary App',
      tags: 'React Js, JavaScript, HTML, CSS: Bootstrap, Netlify, External API: (Dictionary API)',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/dictionary-react', 
      button2: 'Visit Website',
      website: 'https://lucid-darwin-3fe965.netlify.app/',
    },
    {
      image: ReactJsWeatherApp,
      title: 'React Weather App',
      tags: 'React Js, JavaScript, HTML, CSS: Animations & Bootstrap, Netlify, External API: (Weather API)',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/weather-react', 
      button2: 'Visit Website',
      website: 'https://upbeat-wilson-17e7a5.netlify.app/',
    },
    {
      image: VanillaJsWeatherApp,
      title: 'Vanilla Js Weather App',
      tags: 'Vanilla JavaScript, HTML, CSS: Bootstrap, Netlify, External API: (Weather API)',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/WeatherProject', 
      button2: 'Visit Website',
      website: 'https://nostalgic-goldstine-762fc6.netlify.app/',
    },
    {
      image: OnlinePortfolio,
      title: 'Online Portfolio',
      tags: 'React Tsx, TypeScript, HTML, CSS: Bootstrap, AWS',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/KatyPortfolio2', 
      button2: 'Visit Website',
      website: 'https://www.katyrosli.com/',
    }
  ]
  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noreferrer');
  };
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
              <Button className='button card__button card__button--secondary' variant='outline-primary' onClick={() => openInNewTab(element.github)}>{element.button}</Button>
              <Button className='button card__button card__button--primary' variant='primary' onClick={() => openInNewTab(element.website)}>{element.button2}</Button>
              </aside>
              </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </section>
  );
}
