import React from "react";
import { Link } from "react-router-dom";
import notefound from "../assets/img/NoteFound.svg";
function NoteFound() {
  return (
    <div className="notefound">
      <h2 className="notefound__title">Такой страницы нет </h2>
      <Link to="/BooksShop" className="cart__back">
        Назад
      </Link>
      <img className="notefound__img" src={notefound} alt="" />
    </div>
  );
}

export default NoteFound;
