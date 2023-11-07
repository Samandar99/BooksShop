import React from "react";
import ContentLoader from "react-content-loader";

const totalWidth = 1250; // Общая ширина
const totalHeight = 322; // Высота
const numBlocks = 3; // Количество блоков
const gap = 15; // Зазор между блоками

const blockWidth = (totalWidth - (numBlocks - 1) * gap) / numBlocks; // Ширина каждого блока

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={295 + gap + 504 + gap + 400} // Общая ширина
    height={466} // Высота (одинаковая для всех блоков)
    viewBox={`0 0 ${295 + gap + 504 + gap + 400} 466`} // Подгоните viewBox по размерам
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="295" height="466" /> // Первый блок
    <rect x={295 + gap} y="0" rx="0" ry="0" width="504" height="466" /> //
    Второй блок
    <rect
      x={295 + gap + 504 + gap}
      y="0"
      rx="0"
      ry="0"
      width="400"
      height="466"
    />{" "}
    // Третий блок
  </ContentLoader>
);

export default Loader;
