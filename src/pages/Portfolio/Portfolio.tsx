import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactJsCalculatorApp from '../../assets/images/ReactJsCalculatorApp.png';
import TinyReactJsCalculatorApp from '../../assets/images/TinyReactJsCalculatorApp.jpg';
import ReactJsDictionaryApp from '../../assets/images/ReactJsDictionaryApp.png';
import TinyReactJsDictionaryApp from '../../assets/images/TinyReactJsDictionaryApp.jpg';
import ReactJsWeatherApp from '../../assets/images/ReactJsWeatherApp.png';
import TinyReactJsWeatherApp from '../../assets/images/TinyReactJsWeatherApp.jpg';
import VanillaJsWeatherApp from '../../assets/images/VanillaJsWeatherApp.png';
import TinyVanillaJsWeatherApp from '../../assets/images/TinyVanillaJsWeatherApp.jpg';
import OnlinePortfolio from '../../assets/images/OnlinePortfolio.png';
import TinyOnlinePortfolio from '../../assets/images/TinyOnlinePortfolio.jpg';
import MusicPlayer from '../../assets/images/MusicPlayerTsxApp.png';
import TinyMusicPlayer from '../../assets/images/TinyMusicPlayerTsxApp.jpg';


export function Portfolio() {
  const projects = [
        {
      image: MusicPlayer,
      tiny: TinyMusicPlayer,
      alt: 'Music Player',
      title: 'Music Player',
      tags: 'React Tsx, TypeScript, HTML, CSS, Netlify, SoundCloud',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/musicplayer', 
      button2: 'Visit Website',
      website: 'https://beautiful-malasada-027c15.netlify.app/',
    },
    {
      image: ReactJsCalculatorApp,
      tiny: TinyReactJsCalculatorApp,
      alt: 'React Calculator App',
      title: 'React Calculator App',
      tags: 'React Js, JavaScript, HTML, CSS: Animations & Bootstrap, Netlify',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/calculator-react',
      button2: 'Visit Website',
      website: 'https://zealous-babbage-243b8d.netlify.app/',
    },
    {
      image: ReactJsDictionaryApp,
      tiny: TinyReactJsDictionaryApp,
      alt: 'React Dictionary App',
      title: 'React Dictionary App',
      tags: 'React Js, JavaScript, HTML, CSS: Bootstrap, Netlify, External API: (Dictionary API)',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/dictionary-react', 
      button2: 'Visit Website',
      website: 'https://lucid-darwin-3fe965.netlify.app/',
    },
    {
      image: ReactJsWeatherApp,
      tiny: TinyReactJsWeatherApp,
      alt: 'React Weather App',
      title: 'React Weather App',
      tags: 'React Js, JavaScript, HTML, CSS: Animations & Bootstrap, Netlify, External API: (Weather API)',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/weather-react', 
      button2: 'Visit Website',
      website: 'https://upbeat-wilson-17e7a5.netlify.app/',
    },
    {
      image: VanillaJsWeatherApp,
      tiny: TinyVanillaJsWeatherApp,
      alt: 'Vanilla Js Weather App',
      title: 'Vanilla Js Weather App',
      tags: 'Vanilla JavaScript, HTML, CSS: Bootstrap, Netlify, External API: (Weather API)',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/WeatherProject', 
      button2: 'Visit Website',
      website: 'https://nostalgic-goldstine-762fc6.netlify.app/',
    },
    {
      image: OnlinePortfolio,
      tiny: TinyOnlinePortfolio,
      alt: 'Online Portfolio',
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
    <section className='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {projects.map((element, idx) => (
          <Col id='portfolio' key={idx}>
          <Card className='card'>
            <Card.Body className='card__container'>
              <Row>
            <LazyLoadImage className='img-fluid' variant='top' src={element.image} alt={element.alt} placeholderSrc={element.tiny} effect='blur'/> 
              </Row>
              </Card.Body>
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
