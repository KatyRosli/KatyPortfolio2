import React from 'react';
import Button from 'react-bootstrap/Button';
import { Portfolio } from './Portfolio';

export function Home() {
    return (
    <>
      <header>
        <h1>Hi,<br/>I'm Katy Rosli.</h1>
        <h2>I'm a Frontend Developer, based in Stockholm.</h2>
        <p>If you like my works and have a project that you need coded, <br/>
        please don't hesitate to contact me.</p>
        <Button className='button header--primary' onClick={()=> ('/#portfolio')}> View Portfolio </Button>
      </header>
      <Portfolio />
    </>
    );
  }