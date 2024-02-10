import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker';
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
import TodoListApp from '../../assets/images/TodoListApp.png';
import TinyTodoListApp from '../../assets/images/TinyTodoListApp.jpg';
import MusicPlayerApp from '../../assets/images/MusicPlayerTsxApp.png';
import TinyMusicPlayerApp from '../../assets/images/TinyMusicPlayerTsxApp.jpg';
import NextJsGeoGameApp from '../../assets/images/NextJsGeoGameApp.png';
import TinyNextJsGeoGameApp from '../../assets/images/TinyNextJsGeoGameApp.jpg';
import NextJsNodeJsBlog from '../../assets/images/NextJs&NodeJsBlog.png';
import TinyNextJsNodeJsBlog from '../../assets/images/TinyNextJs&NodeJsBlog.jpg';
import FullStackSaltHub from '../../assets/images/FullStackSaltHub.png';
import TinyFullStackSaltHub from '../../assets/images/TinyFullStackSaltHub.jpg';
import AngularTicTacToe from '../../assets/images/AngularTicTacToe.png';
import TinyAngularTicTacToe from '../../assets/images/TinyAngularTicTacToe.jpg';
import SaljaVirke from '../../assets/images/ReactJs_SaljaVirke.png';
import TinySaljaVirke from '../../assets/images/TinyReactJs_SaljaVirke.jpg';
import AdminSystem from '../../assets/images/AdminSystem.png';
import TinyAdminSystem from '../../assets/images/TinyAdminSystem.jpg';
import KartaLeafletMap from '../../assets/images/KartaPageLeafletMap.png';
import TinyKartaLeafletMap from '../../assets/images/TinyKartaPageLeafletMap.jpg';


export function Portfolio() {
  const gaEventTracker = useAnalyticsEventTracker('Portfolio');
  const projects = [
      {
      image: KartaLeafletMap,
      tiny: TinyKartaLeafletMap,
      alt: 'Interactive Leaflet Map',
      title: 'Interactive Leaflet Map',
      tags: 'React Js, JavaScript, Bootstrap, DBeaver, Django, Python, AWS',
      button: 'View Example',
      github: 'https://codewithkatyrosli.com/blog/leaflet-map-adding-drawing-functionality', 
      button2: 'Learn More',
      website: 'https://codewithkatyrosli.com/blog/unleashing-leaflet-map-magic-elevating-user-experience-with-a-polished-touch',
    },
      {
      image: AdminSystem,
      tiny: TinyAdminSystem,
      alt: 'Admin - Drag and Drop',
      title: 'Admin - Drag and Drop',
      tags: 'React Js, JavaScript, Bootstrap, Docker, Django, Python, AWS',
      button: 'View Example',
      github: 'https://codewithkatyrosli.com/blog/crafting-a-seamless-admin-system-navigating-drag-and-drop-challenges', 
      button2: 'Learn More',
      website: 'https://codewithkatyrosli.com/blog/crafting-a-seamless-admin-system-navigating-drag-and-drop-challenges',
    },
    {
      image: SaljaVirke,
      tiny: TinySaljaVirke,
      alt: 'Virkesborsen - Salja Virke',
      title: 'UX & Frontend',
      tags: 'React Js, JavaScript, Bootstrap, Django, Python, PostgreSQL, AWS',
      button: 'View Example',
      github: 'https://codewithkatyrosli.com/blog/redesigning-the-saelj-virke-page-on-virkesborsen-a-case-study-in-user-centric-design', 
      button2: 'Learn More',
      website: 'https://codewithkatyrosli.com/blog/implementing-the-saelj-virke-page-insights-from-a-developer',
    },
    {
      image: FullStackSaltHub,
      tiny: TinyFullStackSaltHub,
      alt: 'SaltHub - work with BE',
      title: 'SaltHub - work with BE',
      tags: 'Next Js, TypeScript, Bootstrap, Vercel, ASP.NET WebApi, SQL Server, Azure',
      button: 'View Example',
      github: 'https://codewithkatyrosli.com/blog/building-salt-hub-my-experience-converting-a-java-script-codebase-to-type-script', 
      button2: 'Learn More',
      website: 'https://codewithkatyrosli.com/blog/building-salt-hub-how-using-react-icons-streamlined-our-frontend-development-workflow',
    },
    {
      image: NextJsNodeJsBlog,
      tiny: TinyNextJsNodeJsBlog,
      alt: 'CodeWithKatyRosli',
      title: 'FullStack Blog',
      tags: 'Next Js, TypeScript, Tailwind, Strapi, Vercel, Heroku, AWS',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/blog', 
      button2: 'Visit Website',
      website: 'https://www.codewithkatyrosli.com/blog',
    },
    {
      image: NextJsGeoGameApp,
      tiny: TinyNextJsGeoGameApp,
      alt: 'Geo Game App',
      title: 'Geo Game App',
      tags: 'React Js, TypeScript, HTML, SCSS, Netlify, Leaflet Js',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/game', 
      button2: 'Visit Website',
      website: 'https://chimerical-meringue-763758.netlify.app',
    },
    {
      image: AngularTicTacToe,
      tiny: TinyAngularTicTacToe,
      alt: 'Angular Tic Tac Toe',
      title: 'Angular Tic Tac Toe',
      tags: 'Angular, TypeScript, HTML, CSS, Jasmine, Karma',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/tictactoeAngular', 
      button2: 'Visit Website',
      website: 'https://tictactoeangular-7247c.web.app/',
    },
    {
      image: MusicPlayerApp,
      tiny: TinyMusicPlayerApp,
      alt: 'Music Player App',
      title: 'Music Player App',
      tags: 'React Js, TypeScript, HTML, CSS, Netlify, SoundCloud',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/musicplayer', 
      button2: 'Visit Website',
      website: 'https://beautiful-malasada-027c15.netlify.app/',
    },
        {
      image: TodoListApp,
      tiny: TinyTodoListApp,
      alt: 'TodoList App',
      title: 'TodoList App',
      tags: 'React JS, JavaScript, HTML, CSS, Netlify, Jest',
      button: 'Visit Github',
      github: 'https://github.com/KatyRosli/TodoListApp', 
      button2: 'Visit Website',
      website: 'https://dreamy-belekoy-14f19e.netlify.app/',
    },
    {
      image: ReactJsCalculatorApp,
      tiny: TinyReactJsCalculatorApp,
      alt: 'React Calculator App',
      title: 'React Calculator App',
      tags: 'React Js, JavaScript, HTML, Bootstrap, Netlify',
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
      tags: 'React Js, JavaScript, HTML, Bootstrap, Netlify, External API',
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
      tags: 'React Js, JavaScript, HTML, Bootstrap, Netlify, External API',
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
      tags: 'Vanilla JavaScript, HTML, Bootstrap, Netlify, External API',
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
      tags: 'React Tsx, TypeScript, HTML, Bootstrap, AWS, Jest',
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
    <section className='portfolio' data-testid="portfolio-section">
      <h2 className='portfolio__title' data-testid="portfolio-title">Portfolio</h2>
      <p className='portfolio__description' data-testid="portfolio-description">In my portfolio here, I take pride in highlighting that each project has been independently developed by me from scratch, 
      showcasing my skills and expertise. However, it is important to note that the project named Salthub represents my previous job, 
      where I actively contribute and collaborate with a team to accomplish its goals.</p>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {projects.map((element, idx) => (
          <Col id='portfolio' key={idx}>
          <Card className='card' data-testid="portfolio-card">
            <Card.Body className='card__container'>
              <Row>
            <LazyLoadImage className='img-fluid' data-testid="card-image" variant='top' src={element.image} alt={element.alt} placeholderSrc={element.tiny} effect='blur'/> 
              </Row>
              </Card.Body>
            <Card.Body className='card__body'>
              <Card.Title className='card__title' data-testid="card-title">{element.title}</Card.Title>
              <Card.Text className='card__tags' data-testid="card-tags">{element.tags}</Card.Text>
              <aside className='card__buttons'>
              <Button className='button card__button card__button--secondary' data-testid="button-secondary" variant='outline-primary' onClick={() => {
                gaEventTracker('buttonClick', 'Visit Github');
                openInNewTab(element.github);
              }}>{element.button}</Button>
              <Button className='button card__button card__button--primary' data-testid="button-primary" variant='primary' onClick={() => {
                gaEventTracker('buttonClick', 'Visit Website');
                openInNewTab(element.website);
              }}>{element.button2}</Button>
              </aside>
              </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </section>
  );
}
