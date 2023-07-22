import React, { useContext } from "react";
import { DataContext } from "./../../context/DataContex";
import "./CartWidget.css";
import img from "./assets/cart.png";

function CartWidget({buys}) {

  const {cartCount} = useContext(DataContext);
  
  return (
    <div className="cart">
      <img className="cart_img" src={img} alt="car_img" />
      <span className="cart__count">{cartCount}</span>
    </div>
  );
}

export default CartWidget;
