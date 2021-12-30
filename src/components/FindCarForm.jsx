import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import '../styles/find-cars-from.css';

const FindCarForm = () => {
  const [enterFromAddress, setEnterFromAddress] = useState('');
  const [enterToAddress, setEnterToAddress] = useState('');
  const [enterJourneyDate, setEnterJourneyDate] = useState('');
  const [enterJourneyTime, setEnterJourneyTime] = useState('');
  const [selectedAc, setSelectedAc] = useState('AC Car');
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <Form className="form" onSubmit={submitHandler}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <Input
            placeholder="From Address"
            type="text"
            required
            value={enterFromAddress}
            onChange={e => setEnterFromAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form__group">
          <Input
            placeholder="To Address"
            type="text"
            required
            value={enterToAddress}
            onChange={e => setEnterToAddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <Input
            placeholder="Journey Date"
            type="date"
            required
            value={enterJourneyDate}
            onChange={e => setEnterJourneyDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <Input
            placeholder="Journey Time"
            type="time"
            className="time__picker"
            required
            value={enterJourneyTime}
            onChange={e => setEnterJourneyTime(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="select__form">
          <select
            value={selectedAc}
            onChange={e => setSelectedAc(e.target.value)}
          >
            <option value="AC Car">AC Car</option>
            <option value="Non AC Car">Non AC Car</option>
          </select>
        </FormGroup>
        <FormGroup className="form__group">
          <Button className="btn find__car__btn">Find Car</Button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
