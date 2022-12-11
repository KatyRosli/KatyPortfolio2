import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Contact() {
  return (
    <Form id='contact'>
      <h2> Contact </h2>
      <p>If you have a project that you need coded, please don't hesitate to contact me.</p>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label> <br />
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label> <br />
        <Form.Control type="email address" placeholder="Email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Enter message here</Form.Label> <br />
        <Form.Control type="message" placeholder="Message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  );
}