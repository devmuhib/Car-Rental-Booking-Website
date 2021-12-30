import React from 'react';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/CommonSection';
import AboutSection from '../components/AboutSection';
import BecomeDriver from '../components/BecomeDriver';
import driveImg from '../assets/img/drive.jpg';
import OurMember from '../components/OurMember';

import '../styles/about.css';

const About = () => {
  return (
    <Helmet title="About">
      <section className="pt-0">
        <CommonSection title="About Us" />
        <Container>
          <AboutSection />
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__section-img about__img">
                <img src={driveImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about__section__content">
                <h2 className="section__title about__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>
                <p className="section__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, totam tenetur porro quasi earum, fugiat cum et
                  explicabo fuga odit voluptates optio, maxime ducimus quae.
                  Velit repellat totam delectus nemo.{' '}
                </p>
                <p className="section__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, totam tenetur porro quasi earum, fugiat cum et
                  explicabo fuga odit voluptates optio, maxime ducimus quae.
                  Velit repellat totam delectus nemo.{' '}
                </p>

                <div className=" mt-4 d-flex align-items-center gap-3 ">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>
                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4 className="about__phone">+088 1234567898</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="become__driver">
        <Container>
          <BecomeDriver />
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMember />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
