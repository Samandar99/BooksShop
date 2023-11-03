import React, { useEffect, useState } from "react";

import imgs from "../assets/img/save-note.svg";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSavedItems } from "../redux/slices/cartSlice";
function BooksShopmark() {
  const { savedItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedItemsFromlocalStorage = localStorage.getItem("savedItems");

    if (savedItemsFromlocalStorage) {
      const savedItemsArray = JSON.parse(savedItemsFromlocalStorage);
      dispatch(setSavedItems(savedItemsArray));
    }
  }, [dispatch]);

  return (
    <>
      {savedItems.length > 0 ? (
        <div className="section-save container">
          <h2>Мои закладки</h2>
          <div className="cards__block">
            {savedItems.map((item) => (
              <div className="card-book" key={item.id}>
                <img className="card__img" src={item.img} alt="" />
                <div className="card__right">
                  <div className="card__right-head">
                    <div>
                      <img src="./img/Star.svg" alt="" />
                      <span>4.9</span>
                    </div>
                    <img className="card__icon" src="./img/save.svg" alt="" />
                  </div>
                  <p className="card__info">{item.title}</p>
                  <span className="card__avtor">{item.author}</span>
                  <div className="card__f">
                    <button>В корзину</button>
                    <p>{item.price}₽</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/" className="cart__back">
            Назад
          </Link>
        </div>
      ) : (
        <div className="note__save">
          <img src={imgs} alt="" />
          <h2>Закладок нет :(</h2>
          <p>Вы ничего не добавляли в закладки</p>
          <Link to="/" className="cart__back">
            Назад
          </Link>
        </div>
      )}
    </>
  );
}

export default BooksShopmark;
