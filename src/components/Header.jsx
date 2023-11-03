import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SearchContext } from "../App";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const [headerScroll, setHeaderScroll] = useState(0);

  const [value, setValue] = useState("");

  const { search, setSearch, drawerOpenClick } = useContext(SearchContext);

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearch(str);
    }, 300),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderScroll(window.scrollY);
    });
  }, []);

  return (
    <nav className={headerScroll > 200 ? "header__nav-active " : "header__nav"}>
      <div className="container nav-flex">
        <div className="header__nav-menu">
          <Link to="/BooksShop">
            <img src="./img/logo.svg" alt="" />
          </Link>
          <button className="header__nav-menu-btn">
            Каталог
            <img src="./img/menu.svg" alt="" />
          </button>
        </div>
        <div className="input-search">
          <img src="./img/Search.svg" alt="" />
          <input
            value={value}
            onChange={onChangeInput}
            type="text"
            placeholder="Поиск"
          />
        </div>
        <div className="header__options">
          <button>
            <Link className="header__options-btns" to="BooksShop/BooksShopmark">
              <img className="header__save" src="./img/save.svg" alt="" />
              <span className="header__save-title">Избранное</span>
            </Link>
          </button>

          <button onClick={() => drawerOpenClick(true)}>
            <span className="count">{totalCount}</span>
            <img className="header__cart" src="./img/cart.svg" alt="" />
            <span>Корзина</span>
          </button>
          <button className="header__enter">Войти</button>
        </div>
      </div>
    </nav>
  );
}
export default Header;