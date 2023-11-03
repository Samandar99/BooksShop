import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Drawer from "./components/panel/Drawer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NoteFound from "./NoteFoundBlock";
import { useSelector, useDispatch } from "react-redux";
import BooksShopmark from "./pages/BooksShopmark";

export const SearchContext = createContext();

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");

  const drawerOpenClick = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch, drawerOpenClick }}>
        <Header
          search={search}
          setSearch={setSearch}
          drawerOpenClick={drawerOpenClick}
        />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/BooksShopmark" element={<BooksShopmark />} />
          <Route path="*" element={<NoteFound />} />
        </Routes>
        <Footer />
        {drawerOpen ? (
          <Drawer drawerOpen={drawerOpen} drawerOpenClick={drawerOpenClick} />
        ) : null}
      </SearchContext.Provider>
    </>
  );
}

export default App;
