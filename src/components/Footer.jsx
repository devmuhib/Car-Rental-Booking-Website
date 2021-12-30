import React from 'react';

import '../styles/footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const QUICK__LINKS = [
  {
    display: 'About Us',
    path: '/about',
  },

  {
    display: 'Our Services',
    path: '/services',
  },

  {
    display: 'Privacy Policy',
    path: '#',
  },

  {
    display: 'Contact Us',
    path: '/contact',
  },
];

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer__top pb-5">
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className="logo footer__logo__container mb-4">
                <h1>
                  <Link to="/home" className="footer__logo">
                    <i class="ri-car-line"></i>
                    <span className="text-light ">
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
                <p className="footer__logo-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nulla id ipsa neque harum quod quae reiciendis et quasi illum
                  alias. Vero ipsam a omnis! Totam nam eaque sequi voluptates
                  doloribus?
                </p>
              </div>
            </Col>
            <Col lg="2" md="4" sm="6">
              <div className="mb-4 ">
                <h5 className="text-light footer__quick__links">Quick Links</h5>
                <ListGroup>
                  {QUICK__LINKS.map((item, index) => (
                    <ListGroupItem
                      className="p-0 mt-3 quick__links"
                      key={index}
                    >
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </Col>
            <Col lg="3" md="4" sm="6">
              <div className="mb-4">
                {' '}
                <h5 className="text-light mb-4 footer__quick__links">
                  Head Office
                </h5>
                <p className="head__office">
                  123 ZindaBazar, Sylhet, Bangladesh
                </p>
                <p className="head__office">Phone: +088 123 456 789 </p>
                <p className="head__office">Email: example@gmail.com</p>
                <p className="head__office">Office Time: 10am - 6pm</p>
              </div>
            </Col>

            <Col lg="3" md="4">
              <div
                className="mb-4
              "
              >
                <h5 className="text-light mb-4 footer__quick__links">
                  Newsletter
                </h5>
                <p className="section__description">
                  Subscribe our newsletter to get updated information
                </p>
                <div className="newsletter">
                  <input type="email" placeholder="email address" />
                  <span>
                    <i class="ri-send-plane-line"></i>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Container>
          <Row>
            <Col>
              <div className="footer__bottom">
                <p className="section__description pt-4 fw-bold text-center d-flex align-items-center justify-content-center gap-1">
                  <i class="ri-copyright-line"></i> Copyright 2022, developed by
                  <span>Muhibur Rahman</span>. All Rights Reserved
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
