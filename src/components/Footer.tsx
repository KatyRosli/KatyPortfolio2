import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsLinkedin, BsGithub, BsBehance, BsInstagram } from "react-icons/bs";

export function Footer() {
    return (
      <footer className='footer-container'>
        <hr />
        <Row>
          <Col className='sitemap'>
        <Link to='/'>Home</Link>
        <HashLink to='/#portfolio'
        scroll={(el:any) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Portfolio</HashLink>
        <Link to='/resume'>Resume</Link>
        <HashLink to='/resume#contact'
        scroll={(el:any) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact</HashLink>
          </Col>
          <Col>
          <BsLinkedin />
          <BsGithub />
          <BsBehance />
          <BsInstagram />
          </Col>
        <p>© 2022 Katy Rosli</p>
        </Row>
      </footer>
    ) 
  };