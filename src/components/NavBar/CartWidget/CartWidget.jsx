import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import img from "./assets/cart.png";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cart">
      <Link to="/cart">
        <img className="cart_img" src={img} alt="car_img" />
        <span className="cart__count" >{totalQuantity}</span>
      </Link>
    </div>
  );
}

export default CartWidget;
