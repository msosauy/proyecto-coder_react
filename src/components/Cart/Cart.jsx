import { Link } from "react-router-dom";
import { CartContext } from "./../context/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, removeItem, totalQuantity, total } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="cart__checkout">
          <h1>No hay articulos en el carrito</h1>
          <Link to="/">
            <button className="cart__checkout__btnprods">Productos</button>
          </Link>
      </div>
    );
  }

  return (
    <div className="cart__checkout">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} removeItem={removeItem} />
      ))}
      <div className="cart__checkout__action">
        <button onClick={() => clearCart()}>Vaciar Carrito</button>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
        <h3>Total: $ {total}</h3>
      </div>
    </div>
  );
};

export default Cart;
