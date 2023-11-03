import React from "react";

import header from "../../assets/header.png"

function HeaderContent() {
  return (
    <div className="header__content container">
      <img src={header} alt="" />
      <div className="header__info">
        <h1>Читай книги — маркетплейс книжных товаров</h1>
        <p className="header__info-text">
          Сравнивайте цены и бронируйте книги в ближайших магазинах!
        </p>
        <button className="header__enter-2">Войти</button>
      </div>
    </div>
  );
}

export default HeaderContent;
