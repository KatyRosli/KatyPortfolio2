import React from 'react';
import Button from 'react-bootstrap/Button';
import { Portfolio } from '../Portfolio/Portfolio';
import { HashLink } from 'react-router-hash-link';

export function Home() {
    return (
    <main>
      <header className='header'>
        <h1 className='header__title'>Hi,<br/>I'm Katy Rosli.</h1>
        <h2 className='header__body'>Experienced Frontend Developer | Fullstack Developer</h2>
        <p className='header__content'>ReactJS .  TypeScript  .  JavaScript .  NextJs  . CSS  .  Node.js . React Native</p>
        <HashLink to='/#portfolio' scroll={(el: HTMLElement) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}><Button className='button header__button header__button--primary'>View Portfolio</Button></HashLink>
      </header>
      <Portfolio />
    </main>
    );
  }