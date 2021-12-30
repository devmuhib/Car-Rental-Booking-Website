import React, { useEffect } from 'react';
import { Col } from 'reactstrap';
import '../styles/servicebox.css';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../config/config';

const ServicesItem = () => {
  const { data: services, isPending, error } = useFetch(`${BASE_URL}/services`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [services]);
  return (
    <>
      {isPending && <h6 className="text-center">Loading....</h6>}
      {error && <h6 className="text-center">{error}</h6>}

      {services &&
        services.map((item, index) => <ServiceBox item={item} key={index} />)}
    </>
  );
};

const ServiceBox = ({ item }) => {
  return (
    <Col lg="4" md="4" sm="6" className="mb-3">
      <div className="service__box">
        <span className="mb-3 d-inline-block">
          <i class={item.icon}></i>
        </span>
        <h6>
          <Link to={`/service-details/${item.id}`}>{item.title}</Link>
        </h6>
        <p className="section__description">
          {item.description.length > 120
            ? item.description.substr(0, 120)
            : item.description}
        </p>
      </div>
    </Col>
  );
};

export default ServicesItem;
