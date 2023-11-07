import axios from "axios";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import saveimg from "../../assets/img/save.svg";
import car from "../../assets/img/car.svg";
import carts from "../../assets/img/cart12.svg";

import { Link, useParams } from "react-router-dom";
import Loader from "../Skeleton/Loader";

function Fullbooks() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://651f5cce44a3a8aa476997b7.mockapi.io/books/" + id
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPizza();
  }, []);

  if (!data) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {/* <h2>{data.title}</h2>
      <img src={data.img} alt="" /> */}
      <div className="container flexes">
        <img className="books-img" src={data.img} alt="" />
        <div className="bookabout">
          <h2>{data.title}</h2>
          <div className="about__book">
            <p>ID товара</p>
            <p>{data.id}</p>
            <p>Издательство</p>
            <p>{data.author}</p>
            <p>Серия</p>
            <p>{data.id}</p>
            <p>Год издания</p>
            <p>{data.id}</p>
          </div>
        </div>
        <div className="cart__about">
          <div className="cart__head">
            <b>{data.price} ₽</b>
            <span>+ до 96 баллов</span>
          </div>
          <div className="cart__option">
            <button>Купить</button>
            <img src={saveimg} alt="" />
          </div>
          <div className="order1">
            <img src={car} alt="" />
            <p className="order1__txt">Доставка курьером, 175 ₽</p>
          </div>
          <div className="order2">
            <img src={carts} alt="" />
            <p className="order1__txt">В магазины сети, Бесплатно</p>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about-info">
          Для правильных решений надо освоить три метода: как съесть слона, как
          сожрать лягушку и когда следует есть брокколи. Про слона и лягушку вы
          наверняка слышали: слона надо есть медленно и по кусочкам, а лягушку —
          глотать первым делом, с утра. Идея с брокколи не так известна, но
          концепция такая: брокколи полезна для долголетия. Но для того чтобы
          дольше жить, мало это знать. Надо ее еще и регулярно есть. Почему сила
          воли работает плохо и зачем избегать тупости? Какие дела стоит сделать
          прямо сейчас, а какие лучше выкинуть из жизни? Чем привычки лучше
          целей? Как сделать что-то новое и интересное, не бросив все в самом
          начале? Как научиться чему угодно и войти в число лучших? Что такое
          осознанная практика и почему 10 тысяч часов может не хватить?Алексей
          Марков, кандидат экономических наук, автор знаменитой "Хулиномики”,
          рок-звезда и отец четверых детей, учит людей думать в своей привычной
          манере: точно, жестко, с циничными шутками и очень легким языком.
        </p>
        <Link to="/" className="cart__back">
        Назад
      </Link>

      </div>
    </>
  );
}
export default Fullbooks;
