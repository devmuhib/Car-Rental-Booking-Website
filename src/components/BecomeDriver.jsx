import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import carImg from '../assets/img/toyota-offer-2.png';
import '../styles/become-driver.css';

const BecomeDriver = () => {
  return (
    <Row>
      <Col lg="6" md="6" sm="6" className=" become__driver__img">
        <img src={carImg} alt="" className="w-100" />
      </Col>
      <Col lg="6" md="6" sm="6">
        <h2 className="section__title become__driver__title">
          Do You Want To Earn With Us? So Don't Be Late.
        </h2>

        <Button className="btn mt-4 become__driver__btn">
          <Link to="/signup">Become a Driver</Link>{' '}
        </Button>
      </Col>
    </Row>
  );
};

export default BecomeDriver;
