import React from 'react';
import Button from 'react-bootstrap/Button';
import { Portfolio } from '../Portfolio/Portfolio';
import { HashLink } from 'react-router-hash-link';
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker';

export function Home() {
  const gaEventTracker = useAnalyticsEventTracker('Home');
    return (
    <main>
      <header className='header'>
        <h1 className='header__title' data-testid="header-title">Hi,<br/>I'm Katy Rosli.</h1>
        <h2 className='header__body' data-testid="header-body">Experienced Full-stack Developer</h2>
        <p className='header__content' data-testid="header-content">ReactJS .  TypeScript  .  Django  .  Python  . NextJs  .  Angular  .  Node.js . React Native</p>
        <HashLink to='/#portfolio' scroll={(el: HTMLElement) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
          <Button data-testid="view-portfolio-button" className='button header__button header__button--primary' onClick={() => gaEventTracker('buttonClick', 'View Portfolio')}>View Portfolio</Button>
          </HashLink>
      </header>
      <Portfolio />
    </main>
    );
  }
