import React from "react";
import MenuHamb from "./Header/MenuHamb";
import "./styles/Header.css";

const Header = () => {
  return (
    <section className="header">
      <img className="header__logo" src="/img/iso-red.png" alt="Logo Steven" />
      <MenuHamb />
    </section>
  );
};

export default Header;
