import React from 'react';
import CommonSection from '../components/CommonSection';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import BillingForm from '../components/BillingForm';

import PaymentMethod from '../components/PaymentMethod';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <section className="pt-0">
        <CommonSection title="Checkout" />
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <h6 className="mb-4">Billing Details</h6>
              <BillingForm />
            </Col>

            <Col lg="6">
              <h6 className="mb-4">Order Summary</h6>
              <div className="mb-5 w-50">
                <div className=" d-flex align-items-center justify-content-between ">
                  <p className="section__description">Cart subtotal amount:</p>
                  <h6>${totalAmount}</h6>
                </div>
                <div className=" d-flex align-items-center justify-content-between ">
                  <p className="section__description">Shipping:</p>
                  <h6 className="fs-6">Free Shipping</h6>
                </div>

                <div className=" d-flex align-items-center justify-content-between ">
                  <p className="section__description">Total Amount:</p>
                  <h6>${totalAmount}</h6>
                </div>
              </div>
              <h6 className="mb-4">Payment Method</h6>
              <PaymentMethod btnText="Place Order" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
