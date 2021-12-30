import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import '../styles/contact-form.css';

const ContactForm = () => {
  const submitHandler = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="contact__form d-inline-block mb-4 me-4">
        <Input type="text" placeholder="Your Name" required />
      </FormGroup>
      <FormGroup className="contact__form d-inline-block mb-4 ms-1">
        <Input type="text" placeholder="Your Name" required />
      </FormGroup>
      <FormGroup className="contact__form d-inline-block mb-4 me-4">
        <Input type="text" placeholder="Your Name" required />
      </FormGroup>
      <FormGroup className="contact__form d-inline-block mb-4 ms-1">
        <Input type="text" placeholder="Your Name" required />
      </FormGroup>

      <FormGroup className="contact__form w-100 ">
        <textarea
          name=""
          id=""
          className="w-100 p-3"
          rows="5"
          placeholder="Write your message here"
          required
        ></textarea>
      </FormGroup>
      <button className="btn mt-4" type="submit">
        Send Message
      </button>
    </Form>
  );
};

export default ContactForm;
