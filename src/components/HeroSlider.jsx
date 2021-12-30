import React from 'react';
import Slider from 'react-slick';
import '../styles/hero-slider.css';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/find-cars-from.css';

const HeroSlider = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt-0">
        <Container>
          <div className=" slider__content w-50  ">
            <h6 className="text-light mb-3">For Rent $70 Per Day</h6>
            <h1 className="text-light mb-4  ">Reserved Now and Get 50% Off</h1>

            <Button className="btn reserve__btn mt-4">
              <Link to="/car-listing/:id">Reserve Now</Link>
            </Button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt-0">
        <Container>
          <div className=" slider__content w-50  ">
            <h6 className="text-light mb-3">For Rent $70 Per Day</h6>
            <h1 className="text-light mb-4  ">Reserved Now and Get 50% Off</h1>

            <Button className="btn reserve__btn mt-4">
              <Link to="/car-listing/:id">Reserve Now</Link>
            </Button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt-0">
        <Container>
          <div className=" slider__content w-50  ">
            <h6 className="text-light mb-3">For Rent $70 Per Day</h6>
            <h1 className="text-light mb-4  ">Reserved Now and Get 50% Off</h1>

            <Button className="btn reserve__btn mt-4">
              <Link to="/car-listing/:id">Reserve Now</Link>
            </Button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;

// const items = ()=>{
//   return (
//      {/* <div className="find__car__form-container w-100 ">
//         <Container className="find__car-container">
//           <Row>
//             <Col lg="4" md="4" sm="0">
//               <div className="find__car__left ">
//                 <h2>Search your best cars here</h2>
//               </div>
//             </Col>

//             <Col lg="8" md="8" sm="12">
//
//
//             </Col>
//           </Row>
//         </Container>
//       </div> */}
//   )
// }
