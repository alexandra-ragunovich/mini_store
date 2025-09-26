import React from "react";
import LikedProducts from "../components/LikedProducts";
import Breadcrumbs from "../components/Breadcrumbs";

const Liked = ({ likedProducts }) => {
  return (
    <section className="favorites">
      <Breadcrumbs className="black-80" />
      <div>
        <h1 className="h1">Избранные товары</h1>

        <LikedProducts likedProducts={likedProducts} />
      </div>
    </section>
  );
};

export default Liked;
