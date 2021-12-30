import React from 'react';
import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Helmet title="404">
      <section className="pt-0">
        <CommonSection title="404 Page" />
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" className="text-center m-auto">
              <h1 className="section__title" style={{ fontSize: '100px' }}>
                404
              </h1>
              <h2 className="section__title">Page Not Found!</h2>
              <p className="section__description">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum commodi, velit vitae fuga, aut eos itaque asperiores
                obcaecati expedita recusandae corporis
              </p>

              <button className="btn mt-4">
                {' '}
                <Link to="/home">Back to Home</Link>{' '}
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default NotFound;
