import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "../components/CartModal";
import AddressDropdown from "../components/AddressDropdown";
import { ReactComponent as Telegram } from "../assets/svg/Telegram.svg";
import { ReactComponent as Viber } from "../assets/svg/Viber.svg";
import { ReactComponent as Arrow } from "../assets/svg/arrow-right.svg";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import { ReactComponent as MenuIcon } from "../assets/svg/menu_icons.svg";
import { ReactComponent as IconSearch } from "../assets/svg/search-normal.svg";
import { ReactComponent as Heart } from "../assets/svg/heart.svg";
import { ReactComponent as Person } from "../assets/svg/person.svg";
import { ReactComponent as House } from "../assets/svg/house-2.svg";
import { ReactComponent as Bag } from "../assets/svg/bag.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleCart = () => setShowCart((prev) => !prev);
  return (
    <div className="header_mobile">
      <header className="header">
        <div className="top_part_of_header">
          <div className="adress_phone">
            <AddressDropdown />
            <div className="tel_icons">
              <p className="medium">+375297886644</p>
              <div className="icons_contact">
                <Telegram />
                <Viber />
              </div>
            </div>
          </div>
          <div className="customers_contacts">
            <button className="customers" onClick={toggleDropdown}>
              <p className="medium">Клиентам</p>
              <Arrow />
              {isOpen && (
                <div className="dropdown-content">
                  <Link className="medium" to="">
                    О нас
                  </Link>
                  <Link className="medium" to="">
                    Гарантия
                  </Link>
                  <Link className="medium" to="">
                    Доставка и оплата
                  </Link>
                </div>
              )}
            </button>
            <p className="medium">Контакты</p>
          </div>
        </div>
        <div className="bottom_part_of_header desktop">
          <Link className="logo desktop" to="/">
            <Logo />
          </Link>
          <div className="menu">
            <div className="text_catalog">
              <MenuIcon />
              <p className="medium">Каталог</p>
            </div>

            <div className="search_icons">
              <Link className="logo mobile" to="/">
                <Logo />
              </Link>
              <div className="search desktop">
                <input placeholder="Введите код или название товара" />
                <IconSearch className="iconsearch" />
              </div>
              <div className="icons">
                <div className="item_icon">
                  <House />
                  <p className="small">Гараж</p>
                </div>
                <Link className="item_icon" to="/liked">
                  <Heart />
                  <p className="small"> Избранное </p>
                </Link>
                <div className="item_icon" onClick={toggleCart}>
                  <Bag />
                  <p className="small"> Корзина</p>
                </div>
                {showCart && <CartModal onClose={toggleCart} />}

                <div className="item_icon last">
                  <Person />
                  <p className="small">Войти</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="search mobile">
        <input placeholder="Введите код или название товара" />
        <IconSearch className="iconsearch" />
      </div>
    </div>
  );
};

export default Header;
