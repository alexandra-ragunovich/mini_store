import React, { useState } from "react";
import { ReactComponent as Minus } from "../assets/svg/minus.svg";
import { ReactComponent as Bag } from "../assets/svg/bag.svg";
import { ReactComponent as Add } from "../assets/svg/add.svg";
import { ReactComponent as Heart } from "../assets/svg/heart_card.svg";
const ProductCard = ({ product, onLikeToggle }) => {
  const [count, setCount] = useState(1);
  const [isLiked, setIsLiked] = useState(() => {
    const liked = JSON.parse(localStorage.getItem("likedProducts")) || [];
    return liked.some((item) => item.id === product.id);
  });

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const toggleLike = () => {
    const liked = JSON.parse(localStorage.getItem("likedProducts")) || [];
    let updated;

    if (isLiked) {
      updated = liked.filter((item) => item.id !== product.id);
    } else {
      updated = [...liked, product];
    }
    localStorage.setItem("likedProducts", JSON.stringify(updated));
    setIsLiked(!isLiked);

    if (onLikeToggle) onLikeToggle();
  };
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    let updatedCart;
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].count += count;
      updatedCart = cart;
    } else {
      updatedCart = [...cart, { ...product, count }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className="card">
      <div className="photo">
        <img src={product.image} alt={product.name} />
        <div
          className={`icon_heart ${isLiked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          <Heart />
        </div>
      </div>
      <div className="card-inf">
        <div className="id_price">
          <p className="pre-title">Артикул : {product.id}</p>
          <p className="h4 big">{product.name}</p>

          <div className="price">
            <h3 className="h3">{product.price} BYN</h3>
            <p className="body_bold black-60">~{product.other_currency}$</p>
          </div>
        </div>
        <div className="characteristics">
          <div className="items_characteristics">
            <p className="small black-60">VIN</p>
            <div className="line"></div>
            <p className="small  black">{product.vin}</p>
          </div>
          <div className="items_characteristics">
            <p className="small black-60">Год</p>
            <div className="line"></div>
            <p className="small  black">{product.year}</p>
          </div>
          <div className="items_characteristics">
            <p className="small black-60">VIN</p>
            <div className="line"></div>
            <p className="small black">{product.vin}</p>
          </div>
        </div>
      </div>
      <div className="btns">
        <div className="counter">
          <button className="btn-icon" onClick={handleDecrement}>
            <Minus />
          </button>
          <span className="medium" id="count">
            {count}
          </span>
          <button className="btn-icon" onClick={handleIncrement}>
            <Add />
          </button>
        </div>
        <button className="main_btn big" onClick={handleAddToCart}>
          <Bag />
          <p>В корзину</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
