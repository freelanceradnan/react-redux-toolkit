import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({
      type: "card/addToCart",
      payload: product,
    });

    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="product-section-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-title">{product.title}</div>
      <div className="product-about">{product.about}</div>
      <div className="product-price">${product.price}</div>

      <button className="product-btn" onClick={handleAddToCart}>
        Add To Cart
      </button>

      {/* ToastContainer should be rendered once in App.jsx ideally, but works here */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default ProductCard;
