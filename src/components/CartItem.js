import React, { useState } from "react";
import { ReactComponent as Minus } from "../assets/svg/minus.svg";
import { ReactComponent as Add } from "../assets/svg/add.svg";
import { ReactComponent as Close } from "../assets/svg/small_close.svg";
import { ReactComponent as Point } from "../assets/svg/point.svg";
import { ReactComponent as Heart } from "../assets/svg/heart.svg";
const CartItem = ({ item, onRemove, onCountChange }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);

  const [count, setCount] = useState(item.count);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(item.id, newCount);
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(item.id, newCount);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="elements_price">
        <div className="info_counter">
          <div className="info">
            <p className="body_bold">{item.name}</p>
            <div className="item_id">
              <p className="medium">Артикул:</p>
              <p className="id medium">{item.id}</p>
            </div>
          </div>
          <div className="count_close">
            <div className="counter_small">
              <button className="small_item_count" onClick={handleDecrement}>
                <Minus />
              </button>
              <span className="medium">{count}</span>
              <button className="small_item_count" onClick={handleIncrement}>
                <Add />
              </button>
            </div>
            <button className="remove-btn" onClick={() => onRemove(item.id)}>
              <Close></Close>
            </button>
          </div>

          <Point
            className="mobile-menu-btn mobile-only"
            onClick={toggleMobileMenu}
          />

          {showMobileMenu && (
            <>
              <div className="overlay" onClick={toggleMobileMenu}></div>
              <div className="mobile-menu">
                <div className="line_count">
                  <div className="line_mobile"></div>
                  <div className="text_counter">
                    <p className="body_bold">Изменить количество</p>
                    <div className="counter_small">
                      <button
                        className="small_item_count"
                        onClick={handleDecrement}
                      >
                        <Minus />
                      </button>
                      <span className="body-large ">{count}</span>
                      <button
                        className="small_item_count"
                        onClick={handleIncrement}
                      >
                        <Add />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="basket_btns">
                  <button onClick={() => onRemove(item.id)}>Удалить</button>
                  <button
                    className="icon_btn"
                    onClick={() => console.log("Добавить в избранное")}
                  >
                    <Heart />
                    <p>В избранное</p>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <h3 className="h3">{item.price * count} BYN</h3>
      </div>
    </div>
  );
};

export default CartItem;
