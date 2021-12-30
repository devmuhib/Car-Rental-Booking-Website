import React from 'react';
import { Form, FormGroup } from 'reactstrap';

const BillingForm = () => {
  return (
    <Form>
      <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
        <span>
          <i class="ri-user-line"></i>
        </span>
        <input type="text" placeholder="Full Name" required />
      </FormGroup>
      <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
        <span>
          <i class="ri-mail-line"></i>
        </span>
        <input type="email" placeholder="Email" required />
      </FormGroup>
      <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
        <span>
          <i class="ri-phone-line"></i>
        </span>
        <input type="number" placeholder="Phone Number" required />
      </FormGroup>

      <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
        <span>
          <i class="ri-global-line"></i>
        </span>
        <input type="text" placeholder="Address" required />
      </FormGroup>

      <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
        <span>
          <i class="ri-global-line"></i>
        </span>
        <input type="text" placeholder="Country" required />
      </FormGroup>

      <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
        <span>
          <i class="ri-building-2-line"></i>
        </span>
        <input type="text" placeholder="City" required />
      </FormGroup>

      <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
        <span>
          <i class="ri-map-pin-user-line"></i>
        </span>
        <input type="text" placeholder="Location" required />
      </FormGroup>
    </Form>
  );
};

export default BillingForm;
