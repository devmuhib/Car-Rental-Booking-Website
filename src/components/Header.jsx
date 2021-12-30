import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles/header.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiAction } from '../store/cartUi-Slice';

const NAV__MENU = [
  {
    text: 'Home',
    path: '/home',
  },

  {
    text: 'About',
    path: '/about',
  },

  {
    text: 'Services',
    path: '/services',
  },

  {
    text: 'Car Listing',
    path: '/car-listing',
  },

  {
    text: 'Shop',
    path: '/products',
  },

  {
    text: 'Blog',
    path: '/blogs',
  },

  {
    text: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const menuRef = useRef();
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const cartShowToggle = () => {
    dispatch(cartUiAction.toggle());
  };

  const menuToggle = () => menuRef.current.classList.toggle('menu__active');
  return (
    <header>
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top-left">
                <span>Need Help?</span>
                <span className="header__top-help">
                  <i class="ri-phone-fill"></i> Call: +321 123 45 978
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" className="text-end">
              <div className="header__top-right">
                <Link to="/signin">
                  <i class="ri-login-circle-line"></i> Login
                </Link>
                <Link to="/signup">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__header">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home">
                    <i class="ri-car-line"></i>{' '}
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4> Bangladesh</h4>
                  <h6>Sylhet City, Bangladesh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="text-end d-flex align-items-center justify-content-end"
            >
              <Button className="header__btn btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="header__bottom">
        <Container>
          <div className="menu__container d-flex justify-content-between align-items-center">
            <span className="menu__bar">
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
            <div className="menu__list" ref={menuRef} onClick={menuToggle}>
              <div className="menu__left">
                {NAV__MENU.map((item, index) => (
                  <NavLink
                    className={navClass =>
                      navClass.isActive ? 'active me-4 ' : 'me-4'
                    }
                    key={index}
                    to={item.path}
                  >
                    {item.text}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="menu__right d-flex gap-4 align-items-center  ">
              <span className="header__cart">
                <i class="ri-shopping-bag-line" onClick={cartShowToggle}></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="search">
                <input type="text" placeholder="search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
