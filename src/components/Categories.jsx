import React, { useState } from "react";

function Categories({ value, onChangeCategory }) {
  const [categories, setCategories] = useState(0);

  const categoriesData = [
    "все",
    "Детективы",
    "Боевики",
    "Проза",
    "Бизнес",
    "Эзотерика",
    "Психология",
    "Мода",
    "Кулинария",
    "Биография",
    "Хобби",
    "Мода",
  ];

  return (
    <div className="container">
      <div className="header__categories">
        <ul>
          {categoriesData.map((item, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? "active1" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Categories;
