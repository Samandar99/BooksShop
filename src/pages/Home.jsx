import React, { useState, useEffect, useContext } from "react";
import Categories from "../components/Categories";
import HeaderContent from "../components/headerContent/HeaderContent";
import Skeleton from "../components/Skeleton";
import Bestsellers from "../components/Bestsellers";
import BooksBlock from "../components/BooksBlock";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { categoryId } = useSelector((state) => state.filter);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const { search } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [bestSellersItem, setBestSellersItem] = useState([]);
  const [isLoadingGoods, setIsLoadingGoods] = useState(true);

  const [isLoadingBest, setIsLoadingBest] = useState(true);
  // const [categories, setCategories] = useState(0);

  const searchProducts = search ? search : "";

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(
        setFilters({
          ...params,
        })
      );
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://samanchiko.github.io/products_api/data.json")
      .then((response) => {
        setTimeout(() => {
          setBestSellersItem(response.data);
          setIsLoadingBest(false);
        }, 2000);
      });
  }, []);

  useEffect(() => {
    const categorys = categoryId > 0 ? `category=${categoryId}` : "";

    axios
      .get(
        `https://651f5cce44a3a8aa476997b7.mockapi.io/books?${categorys}&search=${searchProducts}`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoadingGoods(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, searchProducts]);

  useEffect(() => {
    const queryString = qs.stringify({
      categoryId,
    });
    // console.log(queryString);

    navigate(`?${queryString}`);
  }, [categoryId, searchProducts]);

  return (
    <>
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <HeaderContent />
      <main className="main">
        <section className="books-block">
          <div className="container">
            <h2 className="books-block__title">Популярное</h2>
            <div className="cards__block">
              {isLoadingGoods
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => <BooksBlock {...obj} key={obj.id} />)}
            </div>
          </div>
        </section>
      </main>
      <Bestsellers
        bestSellersItem={bestSellersItem}
        isLoadingBest={isLoadingBest}
      />
    </>
  );
}

export default Home;
