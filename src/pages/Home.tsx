import React from 'react';
import Button from 'react-bootstrap/Button';
import { Portfolio } from './Portfolio';

export function Home() {
    return (
    <>
      <header>
        <h1> Hi, <br/> I'm Katy Rosli. </h1>
        <p>I'm a Frontend Developer, based in Stockholm. If you like my works and have a project
        that you need coded, please don't hesitate to contact me.</p>
        <Button onClick={()=> ('/#portfolio')}> View Portfolio </Button>
      </header>
      <Portfolio />
    </>
    );
  }