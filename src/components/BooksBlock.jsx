import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, addProductsSaved } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function BooksBlock({ title, price, img, author, id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedValue = localStorage.getItem(`save-${id}`);

    if (savedValue) {
      setSave(savedValue === "custom-icon");
    }
  }, [id]);
  const [save, setSave] = useState(false);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      img,
      author,
    };

    dispatch(addProducts(item));
  };

  const addSave = () => {
    const items = {
      id,
      title,
      price,
      img,
      author,
    };

    setSave((prevSave) => {
      const newSave = !prevSave;
      const className = newSave ? "custom-icon" : "custom-isactive";
      localStorage.setItem(`save-${id}`, className);

      if (!newSave) {
        localStorage.removeItem(`save-${id}`);
      }
      dispatch(addProductsSaved(items));
      return newSave;
    });
  };

  // <Link  to={`/books/${obj.id}`}>
  return (
    <>
      <div className="card-book">
      <Link  to={`/books/${id}`}>
          <img className="card__img" src={img} alt="" />
        </Link>

        <div className="card__right">
          <div className="card__right-head">
            <div>
              <img src="./img/Star.svg" alt="" />
              <span>4.9</span>
            </div>
            <svg
              onClick={addSave}
              className={save ? "custom-icon" : "custom-isactive"}
              width="14"
              height="19"
              viewBox="0 0 14 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 0.5H12.5C12.7761 0.5 13 0.723858 13 1V17.5619C13 18.009 12.458 18.2313 12.144 17.913L8.268 13.9828C7.69475 13.4015 6.7619 13.3854 6.16895 13.9466L1.84369 18.0399C1.52495 18.3416 1 18.1156 1 17.6768V1C1 0.723858 1.22386 0.5 1.5 0.5Z"
                stroke="#110C1F"
              />
            </svg>
          </div>
          <p className="card__info">{title}</p>
          <span className="card__avtor">{author}</span>
          <div className="card__f">
            <button onClick={onClickAdd}>В корзину</button>
            <p>{price}₽</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksBlock;
