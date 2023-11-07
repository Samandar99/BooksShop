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

import { Link, useNavigate } from "react-router-dom";
import { fetchOtherData } from "../redux/slices/productSlice";

function Home() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const otherData = useSelector((state) => state.productSlice.otherData);
  const isLoadingOther = useSelector(
    (state) => state.productSlice.isLoadingGoods
  );

  const { categoryId } = useSelector((state) => state.filter);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const { search } = useContext(SearchContext);

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
    dispatch(fetchOtherData({ categoryId, searchProducts }));
  }, [dispatch, categoryId, searchProducts]);

  useEffect(() => {
    const queryString = qs.stringify({
      categoryId,
    });

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
              {isLoadingOther
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : otherData.map((obj) => (
                  
                      <BooksBlock {...obj} key={obj.id}/>
             
                  ))}
            </div>
          </div>
        </section>
      </main>
      <Bestsellers />
    </>
  );
}

export default Home;
