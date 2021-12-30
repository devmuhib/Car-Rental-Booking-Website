import React from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Form>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-user-line"></i>
          </span>
          <input type="text" placeholder="Username" required />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-mail-line"></i>
          </span>
          <input type="email" placeholder="Email" required />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-lock-2-line"></i>
          </span>
          <input type="password" placeholder="Password" required />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-lock-2-line"></i>
          </span>
          <input type="password" placeholder="Confirm Password" required />
        </FormGroup>
        <h6 className="fs-6  text-center">
          <label htmlFor="">
            <input type="checkbox" /> Accept Terms & Conditions
          </label>
        </h6>
        <button className="login__btn " type="submit">
          Register Now
        </button>
      </Form>
      <h6 className="fs-6 text-center mt-4">
        <Link to="/signin">Already Have an Account?</Link>
      </h6>
    </>
  );
};

export default Register;
