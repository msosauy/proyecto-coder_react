import "./CartWidget.css";
import img from "./assets/cart.png";

function CartWidget({buys}) {
  return (
    <div className="cart">
      <img className="cart_img" src={img} alt="car_img" />
      <span className="cart__count">3</span>
    </div>
  );
}

export default CartWidget;
