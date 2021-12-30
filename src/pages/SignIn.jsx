import React from 'react';
import CommonSection from '../components/CommonSection';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet';
import { Link } from 'react-router-dom';

import '../styles/sign-in.css';

const SignIn = () => {
  return (
    <Helmet title="Login">
      <section className="p-0">
        <CommonSection title="Login Page" />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="4" md="6" sm="8" xs="10" className="m-auto">
              <h4 className=" d-flex align-items-center gap-2 justify-content-center mb-5">
                <i class="ri-key-2-line"></i> Sign In
              </h4>
              <Form>
                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-user-line"></i>
                  </span>
                  <input type="text" placeholder="Username or Email" required />
                </FormGroup>
                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-lock-2-line"></i>
                  </span>
                  <input type="email" placeholder="Password" required />
                </FormGroup>
                <h6 className="fs-6  text-end">
                  <Link to="#">Forgot Password?</Link>
                </h6>
                <button className="login__btn " type="submit">
                  Login
                </button>
              </Form>

              <h6 className="fs-6 text-center mt-4">
                <Link to="/signup">Do you need an Account?</Link>
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignIn;
