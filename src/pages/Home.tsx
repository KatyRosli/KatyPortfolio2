import React from 'react';
import Button from 'react-bootstrap/Button';
import { Portfolio } from './Portfolio';
import { HashLink } from 'react-router-hash-link';

export function Home() {
    return (
    <>
      <header className='header'>
        <h1 className='header__title'>Hi,<br/>I'm Katy Rosli.</h1>
        <h2 className='header__body'>A Frontend Developer, based in Stockholm.</h2>
        <p className='header__content'>If you like my works and have a project that you need coded, <br/>
        please don't hesitate to contact me.</p>
        <Button className='button header__button header__button--primary'><HashLink className='button__text' to='/#portfolio'
            scroll={(el:any) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>View Portfolio</HashLink></Button>
      </header>
      <Portfolio />
    </>
    );
  }