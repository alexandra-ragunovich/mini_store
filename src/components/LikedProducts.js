import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
const LikedProducts = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLikedProducts(stored);
  }, []);

  if (likedProducts.length === 0) {
    return (
      <>
        <div className="small" style={{ paddingTop: "20px" }}>
          Ваши избранные товары пусты. Вернитесь на главную.
        </div>

        <Link
          to="/"
          className="main_btn small"
          style={{ marginTop: "30px", width: "240px" }}
        >
          Перейти на в каталог
        </Link>
      </>
    );
  }

  return (
    <div className="product-grid">
      {likedProducts.map((product) => (
        <ProductCard key={product.id} product={product} onLikeToggle={() => {
          const updated = JSON.parse(localStorage.getItem("likedProducts")) || [];
          setLikedProducts(updated); 
        }} />
      ))}
    </div>
  );
};

export default LikedProducts;
