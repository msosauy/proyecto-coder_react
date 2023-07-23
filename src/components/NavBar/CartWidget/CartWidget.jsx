import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import "./CartWidget.css";
import img from "./assets/cart.png";

function CartWidget() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart">
      <Link to="/checkout">
        <img className="cart_img" src={img} alt="car_img" />
        <span className="cart__count">{cartCount}</span>
      </Link>
    </div>
  );
}

export default CartWidget;
