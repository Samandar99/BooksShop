import React, { useEffect } from "react";
import Skeleton from "./Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSellers } from "../redux/slices/productSlice";

function Bestsellers() {
  const dispatch = useDispatch();
  const bestSellersData = useSelector(
    (state) => state.productSlice.bestSellersItem
  );
  const isLoading = useSelector((state) => state.productSlice.isLoadingBest);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchBestSellers());
    }, 2000);
  }, [dispatch]);

  return (
    <section className="products">
      <div className="container">
        <h2 className="books-block__title">Хиты продаж</h2>
        <div className="cards__block">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : bestSellersData.map((item) => (
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
