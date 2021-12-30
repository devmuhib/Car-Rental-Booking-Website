import React from 'react';
import { Container, Row } from 'reactstrap';
import ServicesItem from '../components/ServicesItem';
import Helmet from '../components/Helmet';

import CommonSection from '../components/CommonSection';

const Services = () => {
  return (
    <Helmet title="Services">
      <section className="pt-0">
        <CommonSection title="Services" />
        <Container>
          <Row>
            <ServicesItem />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Services;
