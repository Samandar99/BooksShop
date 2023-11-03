import React from "react";
import cartEmpt from "../../assets/img/cartEmpty.svg"

function CartEmpty() {
  return <div className="cart">
    <img src={cartEmpt} alt="" />
    <h3 className="cart__title">Корзина пустая</h3>
    <p className="cart__txt">Добавьте хотя бы одну пару книг, чтобы сделать заказ.</p>
  </div>;
}

export default CartEmpty;
