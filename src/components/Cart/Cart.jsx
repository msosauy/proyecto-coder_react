import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContex";

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext);
    
  if (totalQuantity === 0) {
    return (
      <>
        <h1>No hay articulos en el carrito</h1>
        <Link to="/">Productos</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={clearCart()}>Vaciar Carrito</button>
      <Link to="/checkout">Checkout</Link>
    </>
  );
};

export default Cart;
