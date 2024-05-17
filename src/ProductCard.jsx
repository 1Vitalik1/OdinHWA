import React from 'react';
import classes from './ProductCard.module.css';
const ProductCard = ({ product }) => {
  return (
    <div className={classes.all}>
          <div className={classes.ProductCard}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <a>Buy</a>
    </div>

    </div>
  );
};

export default ProductCard;