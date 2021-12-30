import React from 'react';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../components/FindCarForm';

import HotOffer from '../components/HotOffer';
import Testimonial from '../components/Testimonial';

import ServicesItem from '../components/ServicesItem';
import BlogList from '../components/BlogList';

import BecomeDriver from '../components/BecomeDriver';

import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="p-0 hero__slider__section">
        <HeroSlider />

        <div className="hero__form">
          <Container className="">
            <Row className="form__row mx-0">
              <Col lg="4" md="4">
                <div className="find__car__left">
                  <h2>Search your best cars here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="about__section">
        <Container>
          <AboutSection />
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">See Our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesItem />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12 text-center mb-5">
              <h6 className="section__subtitle">Come With</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            <HotOffer />
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
            <Col lg="12" className="text-center">
              <h6 className="section__subtitle">Our Clients Says</h6>
              <h2 className="section__title">Testimonial</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Explore Our Blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
