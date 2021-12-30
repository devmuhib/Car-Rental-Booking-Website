import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product-card.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const ProductCard = props => {
  const { id, title, price, imgUrl } = props.item;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        imgUrl,
      })
    );
  };
  return (
    <div className="product__item">
      <div className="product__item-img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="product__info d-flex justify-content-between align-items-center">
        <div>
          <h6>
            <Link to={`/product-details/${id}`}>{title}</Link>
          </h6>
          <h4 className="section__subtitle fw-bold">${Number(`${price}`)}</h4>
        </div>

        <span className="cart__icon me-5">
          <i class="ri-shopping-cart-2-line" onClick={addToCart}></i>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
