import React from 'react';
import { ListGroup } from 'reactstrap';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiAction } from '../store/cartUi-Slice';

import '../styles/cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const cartShowToggle = () => {
    dispatch(cartUiAction.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <i class="ri-close-line" onClick={cartShowToggle}></i>
        </div>

        <div className="cart__item__list">
          {cartItems.length === 0 ? (
            <h6 className="text-center mt-3">No item added to the cart</h6>
          ) : (
            cartItems.map((item, index) => <CartItem key={index} item={item} />)
          )}
        </div>

        <div className="cart__checkout">
          <h6 className="m-0">
            Subtotal Amount: <span>${Number(`${totalAmount}`)}</span>
          </h6>
          <button className="btn" onClick={cartShowToggle}>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Cart;
