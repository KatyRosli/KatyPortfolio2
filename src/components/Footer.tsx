import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsLinkedin, BsGithub, BsBehance, BsInstagram } from "react-icons/bs";

export function Footer() {
  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noreferrer');
  };
    return (
      <footer className='footer'>
        <hr className='footer__line'/>
          <Col className='container'>
            <BsLinkedin onClick={() => openInNewTab('https://www.linkedin.com/in/katy-rosli-761b70185/')} />
            <BsGithub  onClick={() => openInNewTab('https://github.com/KatyRosli')} />
            <BsBehance onClick={() => openInNewTab('https://www.behance.net/KatyLii')} />
            <BsInstagram onClick={() => openInNewTab('https://www.instagram.com/katy.rosli/')} />
          </Col>
          <p className='copyrights'>© 2022 Katy Rosli</p>
      </footer>
    ) 
  };