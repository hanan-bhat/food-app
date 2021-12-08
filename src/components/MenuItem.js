import React from "react";
import "../styles/menu.css";
import cb from "../media/cb.jpg";
const MenuItem = (props) => {
  const { key, image, menuName, price } = props;
  return (
    <div className="item-card" key={key}>
      <div className="item-image">
        <img src={image} alt="" />
      </div>
      <div className="item-content">
        <h2>{menuName}</h2>
        <h3>₹{price}</h3>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
