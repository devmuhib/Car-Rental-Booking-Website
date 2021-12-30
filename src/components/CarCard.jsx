import React from 'react';
import { Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/car-card.css';

const CarCard = ({ item }) => {
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="carItem">
        <div className="car__item-img ">
          <img src={item.imgUrl} alt="" className="w-100" />
        </div>
        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{item.carName}</h4>
          <h6 className="rent__price text-center mt-4">
            ${item.price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex justify-content-between align-items-center mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {item.model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {item.automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {item.speed}
            </span>
          </div>
          <Button className="w-50 carItem__btn carItem__btn-rent">
            <Link to={`/car-details/${item.id}`}>RENT</Link>
          </Button>
          <Button className="w-50 carItem__btn carItem__btn-details">
            <Link to={`/car-details/${item.id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default CarCard;
