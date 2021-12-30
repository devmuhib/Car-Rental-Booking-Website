import React from 'react';
import { ListGroupItem } from 'reactstrap';
import '../styles/cartItem.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
// import product01 from '../assets/img/ava-1.jpg';

const CartItem = ({ item }) => {
  const { id, title, price, imgUrl, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        imgUrl,
      })
    );
  };

  const decrementItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0">
      <div className="cart__item__info">
        <img src={imgUrl} alt="" />

        <div className="product__cart__info d-flex align-items-center gap-5 ">
          <div>
            <h6 className="m-0 fs-6">{title}</h6>
            <p className="section__description m-0">{quantity}x</p>
            <div className="mt-2 d-flex plus__minus align-items-center justify-content-center gap-3 ">
              <span className="fs-6 d-flex justify-content-center align-items-center">
                <i class="ri-add-line" onClick={incrementItem}></i>
              </span>
              <span className="fs-6 d-flex justify-content-center align-items-center">
                {quantity}
              </span>
              <span className="fs-6 d-flex justify-content-center align-items-center">
                <i class="ri-subtract-line" onClick={decrementItem}></i>
              </span>
            </div>
          </div>

          <div className="cart__item__right d-flex align-items-center gap-5">
            <span className="section__subtitle fs-6">
              ${Number(`${totalPrice}`)}
            </span>
            <span className=" d-flex align-items-center cart__del">
              <i class="ri-close-line" onClick={deleteItem}></i>
            </span>
          </div>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
