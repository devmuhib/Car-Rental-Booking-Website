import React from 'react';
import Slider from 'react-slick';

import ava1 from '../assets/img/ava-1.jpg';
import ava2 from '../assets/img/ava-2.jpg';
import ava3 from '../assets/img/ava-3.jpg';
import '../styles/testimonial.css';
import ava4 from '../assets/img/ava-4.jpg';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="mt-4">
      <div className="py-4 px-3 testimonial">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          accusantium cumque enim ab tempore illum assumenda commodi praesentium
          repellendus necessitatibus est vel velit eligendi hic quisquam dolorum
          quos neque sint!{' '}
        </p>

        <div className="mt-3 d-flex align-items-center gap-4 ">
          <img src={ava1} alt="" className="w-25 h-25" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3 testimonial">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          accusantium cumque enim ab tempore illum assumenda commodi praesentium
          repellendus necessitatibus est vel velit eligendi hic quisquam dolorum
          quos neque sint!{' '}
        </p>

        <div className="mt-3 d-flex align-items-center gap-4 ">
          <img src={ava2} alt="" className="w-25 h-25" />

          <div>
            <h6 className="mb-0 mt-3">Daniel Cooper</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3 testimonial">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          accusantium cumque enim ab tempore illum assumenda commodi praesentium
          repellendus necessitatibus est vel velit eligendi hic quisquam dolorum
          quos neque sint!{' '}
        </p>

        <div className="mt-3 d-flex align-items-center gap-4 ">
          <img src={ava3} alt="" className="w-25 h-25" />

          <div>
            <h6 className="mb-0 mt-3">Martin Cooper</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3 testimonial">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          accusantium cumque enim ab tempore illum assumenda commodi praesentium
          repellendus necessitatibus est vel velit eligendi hic quisquam dolorum
          quos neque sint!{' '}
        </p>

        <div className="mt-3 d-flex align-items-center gap-4 ">
          <img src={ava4} alt="" className="w-25 h-25" />

          <div>
            <h6 className="mb-0 mt-3"> Lily Davis</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
