import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { ReactComponent as Close } from "../assets/svg/close.svg";
import { ReactComponent as Arrow } from "../assets/svg/arrow-small.svg";

const CartModal = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartItems(updated);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const updateItemCount = (id, newCount) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, count: newCount } : item
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartItems(updated);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="top_part_of_basket">
          <div className="title_count">
            <h1 className="h1">Корзина</h1>
            <h3 className="h3">/{totalCount} шт.</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <Close></Close>
          </button>
        </div>
        <div className="items_btn">
          <div className="cart-list">
            {cartItems.length === 0 ? (
              <p className="small">Корзина пуста</p>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onCountChange={updateItemCount}
                />
              ))
            )}
          </div>
          <div className="promo_btn">
            <div className="promo">
              <input
                className="medium"
                type="text"
                placeholder="Введите промокод"
              />
              <div className="small_arrow">
                <Arrow></Arrow>
              </div>
            </div>
            <div className="total_btn">
              <div className="total">
                <div className="item_price">
                  <h3 className="h3">Сумма заказа</h3>
                  <div className="order-summary">
                    {cartItems.map((item) => (
                      <div key={item.id} className="order-item">
                        <p className="medium">{item.name}</p>
                        <div className="line"></div>
                        <p className=" body_bold">
                          {item.price * item.count} BYN
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="total_price">
                  <p className="medium">Итого</p>
                  <h2 className="h2">{total} BYN</h2>
                </div>
              </div>
              <button className="main_btn">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
