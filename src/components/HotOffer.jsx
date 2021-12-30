import React from 'react';

import { BASE_URL } from '../config/config';
import useFetch from '../hooks/useFetch';

import '../styles/hot-offer.css';
import CarCard from './CarCard';

const HotOffer = () => {
  const { data: carData, isPending, error } = useFetch(`${BASE_URL}/cars`);

  return (
    <>
      {isPending && <h6 className="text-center">Loading......</h6>}
      {error && <h6 className="text-center">{error}</h6>}

      {carData &&
        carData
          .slice(0, 6)
          .map((item, index) => <CarCard item={item} key={index} />)}
    </>
  );
};

export default HotOffer;
