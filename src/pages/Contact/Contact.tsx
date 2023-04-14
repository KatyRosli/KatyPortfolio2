import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export function Contact() {
  const form = useRef<null | HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    emailjs.sendForm('service_ljqlf28', 'template_fye02wi', form.current, 't_lIr25-4DnNdT2bQ')
      .then(() => {
          setMessage('Thank you for your message! I will get back to you soon.');
      }, () => {
          setMessage('Oops, please fill in all of the input fields.');
      });
  };

  return (
    <Form className='form' id='contact' ref={form} onSubmit={sendEmail}>
      <h2 className='form__title'>Contact</h2>
      <p className='form__body'>If you have a project that you need coded, please don't hesitate to contact me.</p>
      {message && <p className='form__message'>{message}</p>}
      <Form.Group className='mb-3' controlId="formName">
        <Form.Label className='form__label'>Name</Form.Label>
        <Form.Control className='form__control' type="name" placeholder="Enter name" name='user_name' required />
      </Form.Group>
      <Form.Group className='mb-3' controlId="formEmail">
        <Form.Label className='form__label'>Email address</Form.Label>
        <Form.Control className='form__control' type="email address" placeholder="Enter email address" name='user_email' required/>
      </Form.Group>
      <Form.Group className='mb-3' controlId="formMessage">
        <Form.Label className='form__label'>Message</Form.Label>
        <textarea placeholder='Enter message' name='message' required></textarea>
      </Form.Group>
      <aside className='contact__button'>
      <Button className='button contact__button contact__button--primary' variant="primary" type="submit" value='send'>
        Send Message
      </Button>
      </aside>
    </Form>
  );
}