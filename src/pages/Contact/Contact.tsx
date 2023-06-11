import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function Contact() {
  const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID || '';
  const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID || '';
  const emailUserId = process.env.REACT_APP_EMAIL_USER_ID || '';

  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const userEmail = formData.get('user_email') as string;
    const emailValue = userEmail.trim();

    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === 'katyrosli@gmail.com') {
      setMessage("Sorry, you can't use katyrosli@gmail.com as the email address.");
      return;
    }

    if (!emailRegex.test(emailValue)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      await emailjs.sendForm(emailServiceId, emailTemplateId, form.current, emailUserId);
      setMessage('Thank you for your message! I will get back to you soon.');
      form.current.reset();
    } catch (error) {
      console.log (process.env.REACT_APP_EMAIL_SERVICE_ID, 'test' )
      setMessage('Oops, please fill in all of the input fields.');
    }
  };

  return (
    <Form className="form" id="contact" ref={form} onSubmit={sendEmail}>
      <h2 className="form__title">Contact</h2>
      <p className="form__body">
        If you have a project that you need coded, please don't hesitate to contact me.
      </p>
      {message && <p className="form__message">{message}</p>}
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label className="form__label">Name</Form.Label>
        <Form.Control className="form__control" type="text" placeholder="Enter name" name="user_name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label className="form__label">Email address</Form.Label>
        <Form.Control
          className="form__control"
          type="email"
          placeholder="Enter email address"
          name="user_email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label className="form__label">Message</Form.Label>
        <textarea placeholder="Enter message" name="message" required></textarea>
      </Form.Group>
      <aside className="contact__button">
        <Button className="button contact__button contact__button--primary" variant="primary" type="submit" value="send">
          Send Message
        </Button>
      </aside>
    </Form>
  );
}

