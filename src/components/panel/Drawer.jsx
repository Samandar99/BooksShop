import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import CartEmpty from "../CartItem/CartEmpty";
import { addProducts } from "../../redux/slices/cartSlice";

function Drawer({ drawerOpen, drawerOpenClick }) {
  function handleDrawerClick(e) {
    e.stopPropagation();
  }
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

 

  return (
    <div
      className={drawerOpen ? "block " : "active"}
      onClick={() => drawerOpenClick(false)}
    >
      <div
        className={drawerOpen ? "drawer" : "active"}
        onClick={handleDrawerClick}
      >
        <div className="drawer__header">
          <h4>Корзина</h4>
          <button
            type="button"
            aria-label="Close"
            className="drawer__close"
            onClick={() => drawerOpenClick(false)}
          >
            ×
          </button>
        </div>

        {totalPrice ? (
          <div className="drawer__products">
            {items.map((item) => (
              <div className="drawer__item" key={item.id}>
                <img className="drawer__item-img" src={item.img} alt="" />
                <div className="drawer__item-info">
                  <h3 className="drawer__item-title">
                    Лягушка, слон и брокколи. Как жить и как не надо
                  </h3>
                  <p>Алексей Марков</p>

                  <div className="drawer__options">
                    <b className="drawer__sum">{item.price * item.count} ₽</b>
                    {/* <div className="drawer__op">
                      <button className="minus">-</button>
                      <p>{item.count}</p>
                      <button className="plus">+</button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CartEmpty />
        )}

        {totalPrice ? (
          <Link
            to="/cart"
            className="order"
            onClick={() => drawerOpenClick(false)}
          >
            <span>Оформить заказ</span>
            <span>{totalPrice} ₽</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Drawer;
