import React from "react";
import Categories from "../components/Categories";
import "../assets/styles/cart.css";
import Bestsellers from "../components/Bestsellers";
import { Link } from "react-router-dom";
import carImg from "../assets/img/image6.png";
import carGet from "../assets/img/image5.png";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/slices/cartSlice";
import CartImg from "../assets/img/cartEmpty.svg";

function Cart() {
  const dispatch = useDispatch();

  const { totalPrice, items } = useSelector((state) => state.cart);

  console.log(items);

  return (
    <>
      {/* <Categories /> */}
      <div className="container">
        {totalPrice ? (
          <>
            <h2 className="cart__title">Ваш заказ</h2>
            <div className="cart__block">
              {items.map((item) => (
                <CartItem {...item} key={item.id} />
              ))}
            </div>

            <h3 className="cart__sub">Добавить к заказу?</h3>
            <div className="cards__block">
              <div className="card-book">
                <img className="card__img" src={carImg} alt="" />
                <div className="card__right">
                  <div className="card__right-head">
                    <div>
                      <img src="./img/Star.svg" alt="" />
                      <span>4.9</span>
                    </div>

                    <img className="card__icon" src="./img/save.svg" alt="" />
                  </div>
                  <p className="card__info">
                    Лягушка, слон и брокколи. Как жить и как не надо
                  </p>
                  <span className="card__avtor">Роберт Кийосаки</span>
                  <div className="card__f">
                    <button>В корзину</button>
                    <p>400₽</p>
                  </div>
                </div>
              </div>
              <div className="card-book">
                <img className="card__img" src={carGet} alt="" />
                <div className="card__right">
                  <div className="card__right-head">
                    <div>
                      <img src="./img/Star.svg" alt="" />
                      <span>4.9</span>
                    </div>

                    <img className="card__icon" src="./img/save.svg" alt="" />
                  </div>
                  <p className="card__info">
                    Лягушка, слон и брокколи. Как жить и как не надо
                  </p>
                  <span className="card__avtor">Роберт Кийосаки</span>
                  <div className="card__f">
                    <button>В корзину</button>
                    <p>400₽</p>
                  </div>
                </div>
              </div>
              <div className="card-book">
                <img className="card__img" src={carImg} alt="" />
                <div className="card__right">
                  <div className="card__right-head">
                    <div>
                      <img src="./img/Star.svg" alt="" />
                      <span>4.9</span>
                    </div>

                    <img className="card__icon" src="./img/save.svg" alt="" />
                  </div>
                  <p className="card__info">
                    Лягушка, слон и брокколи. Как жить и как не надо
                  </p>
                  <span className="card__avtor">Роберт Кийосаки</span>
                  <div className="card__f">
                    <button>В корзину</button>
                    <p>400₽</p>
                  </div>
                </div>
              </div>
              <div className="card-book">
                <img className="card__img" src={carGet} alt="" />
                <div className="card__right">
                  <div className="card__right-head">
                    <div>
                      <img src="./img/Star.svg" alt="" />
                      <span>4.9</span>
                    </div>

                    <img className="card__icon" src="./img/save.svg" alt="" />
                  </div>
                  <p className="card__info">
                    Лягушка, слон и брокколи. Как жить и как не надо
                  </p>
                  <span className="card__avtor">Роберт Кийосаки</span>
                  <div className="card__f">
                    <button>В корзину</button>
                    <p>400₽</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="cart__sub">О вас</h3>
            <form>
              <div className="cart__form">
                <input type="text" placeholder="Имя*" />
                <input type="text" placeholder="+7" />
                <input type="text" placeholder="mail@gmail.com" />
              </div>
              <div className="cart__total">
                <h3>Итого: {totalPrice} ₽</h3>
                <button>Оформить заказ</button>
              </div>
            </form>
            <Link to="/" className="cart__back">
              Назад
            </Link>
          </>
        ) : (
          <div className="cart-box">
            <h2 className="cart__title">Корзина пустая</h2>
            <img src={CartImg} alt="" />
            <p className="cart__txt">
              Добавьте хотя бы одну пару книг, чтобы сделать заказ.
            </p>
            <Link to="/" className="cart__back">
              Назад
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
