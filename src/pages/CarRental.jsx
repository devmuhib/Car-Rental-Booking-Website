import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../config/config';
import useFetch from '../hooks/useFetch';
import ReactPaginate from 'react-paginate';

import '../styles/pagination.css';

import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import { Container, Row } from 'reactstrap';
import CarCard from '../components/CarCard';

const CarRental = () => {
  const { data: carData, isPending, error } = useFetch(`${BASE_URL}/cars`);

  const [pageNumber, setPageNumber] = useState(0);
  const carPerPage = 6;
  const visitedPage = pageNumber * carPerPage;
  const displayPage = carData
    .slice(visitedPage, visitedPage + carPerPage)
    .map(item => <CarCard item={item} />);

  const pageCount = Math.ceil(carData.length / carPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carData]);

  return (
    <Helmet title="Car-Listing">
      <section className="pt-0">
        <CommonSection title="Car Listing" />
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {isPending && <h6 className="text-center">Loading......</h6>}
            {error && <h6 className="text-center">{error}</h6>}
            <div className=" d-flex align-items-center mb-5 gap-3 car__sorting">
              <span className=" d-flex align-items-center  gap-1">
                <i class="ri-sort-asc"></i> Sort By
              </span>
              <select name="" id="">
                <option value="Default">Default</option>
                <option value="Low-High">Price ( Low to High )</option>
                <option value="High-Low">Price ( High to Low )</option>
              </select>
            </div>

            {displayPage}
            <div>
              <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarRental;
