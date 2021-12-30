import React from 'react';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/CommonSection';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Helmet title="Contact">
      <section className="pt-0">
        <CommonSection title="Contact Us" />
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="7" md="7 " sm="12">
              <h6 className="mb-4">Get in Touch</h6>
              <ContactForm />
            </Col>

            <Col lg="5" md="5 " sm="12">
              <div className="contact__info__content mt-sm-4">
                <h6>Contact Information</h6>
                <p className="section__description">
                  123 ZindaBazar, Sylhet, Bangladesh
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Email: </h6>
                  <p className="section__description mb-0">example@gmail.com</p>
                </div>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone: </h6>
                  <p className="section__description mb-0">+088 123456789</p>
                </div>
                <h6 className="mt-4">Follow Us:</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  <Link
                    to="#"
                    className="fs-6 fw-bold"
                    style={{ color: '#000d6b' }}
                  >
                    <i class="ri-facebook-line"></i>
                  </Link>
                  <Link
                    to="#"
                    className="fs-6 fw-bold"
                    style={{ color: '#000d6b' }}
                  >
                    <i class="ri-instagram-line"></i>
                  </Link>
                  <Link
                    to="#"
                    className="fs-6 fw-bold"
                    style={{ color: '#000d6b' }}
                  >
                    <i class="ri-linkedin-line"></i>
                  </Link>
                  <Link
                    to="#"
                    className="fs-6 fw-bold"
                    style={{ color: '#000d6b' }}
                  >
                    <i class="ri-twitter-line"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
