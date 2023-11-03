import React from "react";
import Skeleton from "./Skeleton";

function Bestsellers({ bestSellersItem,isLoadingBest }) {
  // console.log(bestSellersItem[0].price);
  return (
    <section className="products">
  
      <div className="container">
        <h2 className="books-block__title">Хиты продаж</h2>
        <div className="cards__block">
          {isLoadingBest ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) : bestSellersItem.map((item) => (
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
      </div>
    </section>
  );
}
export default Bestsellers;
