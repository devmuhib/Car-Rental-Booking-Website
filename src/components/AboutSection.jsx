import React from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/about-section.css';

const AboutSection = () => {
  return (
    <Row>
      <Col lg="6" md="6">
        <div className="about__section__content">
          <h6 className="section__subtitle">About Us</h6>
          <h2 className="section__title">Welcome to Car Rent Service</h2>
          <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            totam tenetur porro quasi earum, fugiat cum et explicabo fuga odit
            voluptates optio, maxime ducimus quae. Velit repellat totam delectus
            nemo.{' '}
          </p>

          <div className="about__section-checkbox d-flex align-items-center ">
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
              amet.
            </p>
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="about__section-checkbox d-flex align-items-center  ">
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
              amet.
            </p>
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
      </Col>

      <Col lg="6" md="6">
        <div className="about__section-img">
          <img
            src="http://localhost:5000/images/bmw-offer.ecfb9ac1.png"
            alt=""
            className="w-100"
          />
        </div>
      </Col>
    </Row>
  );
};

export default AboutSection;
