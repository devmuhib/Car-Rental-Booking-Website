import React from 'react';
import '../styles/booking-form.css';

import { Form, FormGroup, Input } from 'reactstrap';

const BookingForm = () => {
  return (
    <Form>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input type="text" placeholder="Your First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="Your Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input type="email" placeholder="Your Email Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input type="number" placeholder="Your Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input type="text" placeholder="From Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="To Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 Person">1 Person</option>
          <option value="2 Person">2 Person</option>
          <option value="3 Person">3 Person</option>
          <option value="4 Person">4 Person</option>
          <option value="5-10 Person">5-10 Person</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-3">
        <select name="" id="">
          <option value="1 Luggage">1 Luggage</option>
          <option value="2 Luggage">2 Luggage</option>
          <option value="3 Luggage">3 Luggage</option>
          <option value="4 Luggage">4 Luggage</option>
          <option value="5+ Luggage">5+ Luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-3">
        <Input type="date" placeholder="Journey Data" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          type="textarea"
          rows={5}
          placeholder="Write"
          className="textArea"
        />
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
