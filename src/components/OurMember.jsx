import React from 'react';

import ava01 from '../assets/img/ava-1.jpg';
import ava02 from '../assets/img/ava-2.jpg';
import ava03 from '../assets/img/ava-3.jpg';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/our-member.css';

const OUR__MEMBERS = [
  {
    name: 'Jhon Doe',
    experience: '5 years of experience',
    fbUrl: '#',
    instUrl: '#',
    twitUrl: '#',
    linkedinUrl: '#',
    imgUrl: ava01,
  },

  {
    name: 'David Lisa',
    experience: '5 years of experience',
    fbUrl: '#',
    instUrl: '#',
    twitUrl: '#',
    linkedinUrl: '#',
    imgUrl: ava02,
  },

  {
    name: 'Hilton King',
    experience: '5 years of experience',
    fbUrl: '#',
    instUrl: '#',
    twitUrl: '#',
    linkedinUrl: '#',
    imgUrl: ava03,
  },

  {
    name: 'Jhon Doe',
    experience: '5 years of experience',
    fbUrl: '#',
    instUrl: '#',
    twitUrl: '#',
    linkedinUrl: '#',
    imgUrl: ava01,
  },
];

const OurMember = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" className="mb-4" key={index}>
          <div className="single__member">
            <div className="single__member__img">
              <img src={item.imgUrl} alt="" className="w-100" />
              <div className="single__member__social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMember;
