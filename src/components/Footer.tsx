import Col from 'react-bootstrap/Col';
import { BsLinkedin, BsGithub, BsBehance, BsInstagram } from "react-icons/bs";
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';

export function Footer() {
  const gaEventTracker = useAnalyticsEventTracker('Footer');

  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noreferrer');
  };

    return (
      <footer className='footer'>
        <hr className='footer__line'/>
          <Col className='container'>
            <BsLinkedin data-testid="linkedin-icon" onClick={() => {
                gaEventTracker('buttonClick', 'Visit LinkedIn');
                openInNewTab('https://www.linkedin.com/in/katy-rosli-761b70185/'); 
              }}
             />
            <BsGithub data-testid="github-icon" onClick={() => {
                gaEventTracker('buttonClick', 'Visit Github');
                openInNewTab('https://github.com/KatyRosli');
              }}
            />
            <BsBehance data-testid="behance-icon" onClick={() => {
                gaEventTracker('buttonClick', 'Visit Behance');
                openInNewTab('https://www.behance.net/KatyLii');
              }} 
            />
            <BsInstagram data-testid="instagram-icon" onClick={() => {
                gaEventTracker('buttonClick', 'Visit Instagram');
                openInNewTab('https://www.instagram.com/katy.rosli/');
              }}
             />
          </Col>
          <p className='copyrights'>© 2023 Katy Rosli</p>
      </footer>
    ) 
  };
