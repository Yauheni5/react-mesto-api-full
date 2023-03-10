import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoMesto.svg";

export default function Header({
  isRegisteredUser,
  onRegisteredUser,
  loginUser,
  handleClickLogout,
}) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="logo" />
      {loginUser ? (
        <div className="header__cabinet">
          <h2 className="header__login">{loginUser}</h2>
          <Link
            to="/sign-in"
            onClick={handleClickLogout}
            className="header__button">
            Выйти
          </Link>
        </div>
      ) : isRegisteredUser ? (
        <Link to="/sign-up" onClick={onRegisteredUser} className="header__link">
          Регистрация
        </Link>
      ) : (
        <Link to="/sign-in" onClick={onRegisteredUser} className="header__link">
          Войти
        </Link>
      )}
    </header>
  );
}
