import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#" className="footer__logo">
          <img src="./img/logo.svg" alt="" />
        </a>
        <div className="footer__block">
          <div className="footer__item">
            <ul className="footer__item-list-1">
              <li>
                <a href="#">Каталог</a>
              </li>
              <li>
                <a href="#">Партнерская программа</a>
              </li>
              <li>
                <a href="#">Подробнее о нас</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul className="footer__item-list-2">
              <li>
                <a href="#">Остались вопросы? Напишите нам</a>
              </li>
              <li>
                <a href="#">korablik@yandex.ru</a>
              </li>
              <li className="link__logo-svg">
                <a href="#">
                  <img src="./img/vk.svg" alt="" />
                </a>
                <a href="#">
                  <img src="./img/od.svg" alt="" />
                </a>
                <a href="#">
                  <img src="./img/twiter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">Мы на связи с 9 до 18 часов (GMT +03:00)</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul className="footer__item-list-3">
              <li>
                <a href="#">Бесплатный звонок по России</a>
              </li>
              <li>
                <a href="#">8 (988) 545-55-55</a>
              </li>
              <li>
                <a href="#">Мы в социальных сетях</a>
              </li>
              <li>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
