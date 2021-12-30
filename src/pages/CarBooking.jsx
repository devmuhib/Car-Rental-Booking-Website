import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../config/config';
import BookingForm from '../components/BookingForm';
import PaymentMethod from '../components/PaymentMethod';
import Helmet from '../components/Helmet';

const CarBookingView = () => {
  const { id } = useParams();
  const {
    data: carData,
    isPending,
    error,
  } = useFetch(`${BASE_URL}/cars/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carData]);

  return (
    <Helmet title="Car Booking">
      <section className="car__booking">
        <Container>
          <Row>
            {isPending && <h6 className="text-center">Loading......</h6>}
            {error ? (
              <h6 className="text-center">{error}</h6>
            ) : (
              <>
                <Col lg="6">
                  <img src={carData.imgUrl} alt="" className="w-100" />
                </Col>
                <Col lg="6">
                  <div className="booking__car__info">
                    <h2> {carData.carName} </h2>
                    <div className=" d-flex gap-5 align-items-center mb-4 mt-3">
                      <h6 className="rent__price">${carData.price}.00/ Day</h6>
                      <span className=" d-flex align-items-center gap-2">
                        <span style={{ color: '#f9a826' }}>
                          <i class="ri-star-fill"></i>
                          <i class="ri-star-fill"></i>
                          <i class="ri-star-fill"></i>
                          <i class="ri-star-fill"></i>
                          <i class="ri-star-half-line"></i>
                        </span>{' '}
                        ( {carData.rating}
                        ratings )
                      </span>
                    </div>
                    <p className="section__description">
                      {carData.description}
                    </p>

                    <div
                      className="car__item-info d-flex  align-items-center mt-3"
                      style={{ columnGap: '4rem' }}
                    >
                      <span className=" d-flex align-items-center gap-1 section__description">
                        <i class="ri-car-line"></i> {carData.model}
                      </span>
                      <span className=" d-flex align-items-center gap-1 section__description">
                        <i class="ri-settings-2-line"></i> {carData.automatic}
                      </span>
                      <span className=" d-flex align-items-center gap-1 section__description">
                        <i class="ri-timer-flash-line"></i> {carData.speed}
                      </span>
                    </div>

                    <div
                      className="car__item-info d-flex  align-items-center mt-3"
                      style={{ columnGap: '2.8rem' }}
                    >
                      <span className=" d-flex align-items-center gap-1 section__description">
                        <i class="ri-map-pin-line"></i> {carData.gps}
                      </span>
                      <span className=" d-flex align-items-center gap-1 section__description">
                        <i class="ri-wheelchair-line"></i> {carData.seatType}
                      </span>
                      <span className=" d-flex align-items-center gap-1 section__description">
                        <i class="ri-building-2-line"></i> {carData.brand}
                      </span>
                    </div>
                  </div>
                </Col>
              </>
            )}

            <Col lg="7" className="mt-5">
              <div className="personal__information__form mt-5">
                <h5 className="mb-4">Booking Details</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="rent__payment__method mt-5">
                <h5 className="mb-4">Payment Method</h5>
                <PaymentMethod btnText="Reserve Now" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarBookingView;
