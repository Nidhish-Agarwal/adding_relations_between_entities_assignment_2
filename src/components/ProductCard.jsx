import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        Average Rating: {product.avgRating} ({product.totalRatings} ratings)
      </p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
