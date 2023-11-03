import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addProducts, minusProducts } from "../../redux/slices/cartSlice";

function CartItem({ id, title, author, img, count, price }) {
  const dispatch = useDispatch({});

  const { items, totalPrice } = useSelector((state) => state.cart);

  function plusProduct() {
    dispatch(
      addProducts({
        id,
      })
    );
  }

  const minusItem = () => {
    dispatch(minusProducts(id));
  };

  return (
    <>
      <div className="cart__block-box">
        <div className="d-flex">
          <img className="cart-imgs" src={img} alt="" />
          <div className="cart__name">
            <b>{title}</b>
            <p>{author}</p>
          </div>
        </div>
        <div className="flex">
          <div className="cart__options">
            <button onClick={minusItem}>-</button>
            <span>{count}</span>
            <button onClick={plusProduct}>+</button>
          </div>
          <b>{count * price}₽</b>
        </div>
      </div>
    </>
  );
}

export default CartItem;
