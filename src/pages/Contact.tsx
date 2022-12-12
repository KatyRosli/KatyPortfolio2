import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Contact() {
  return (
    <Form className='form' id='contact'>
      <h2 className='form__title'>Contact</h2>
      <p className='form__body'>If you have a project that you need coded, please don't hesitate to contact me.</p>
      <Form.Group className='mb-3' controlId="formName">
        <Form.Label className='form__label'>Name</Form.Label> <br />
        <Form.Control className='form__control' type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className='mb-3' controlId="formEmail">
        <Form.Label className='form__label'>Email address</Form.Label> <br />
        <Form.Control className='form__control' type="email address" placeholder="Email address" />
      </Form.Group>
      <Form.Group className='mb-3' controlId="formMessage">
        <Form.Label className='form__label'>Message</Form.Label> <br />
        <Form.Control className='form__message' type="message" placeholder="Message" />
      </Form.Group>
      <Button className='button contact__button contact__button--primary' variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  );
}