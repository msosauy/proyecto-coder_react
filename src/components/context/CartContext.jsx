import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  //Sumatoria de precios
  useEffect(() => {
    setTotal(cart.reduce((storage, el) => storage + el.quantity * el.price, 0));
  }, [cart]);

  //Cantidad total de articulos en el carrtito
  useEffect(() => {
    setTotalQuantity(cart.reduce((storage, el) => storage + el.quantity, 0));
  }, [cart]);

  //Agrega un nuevo item
  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  //Elimina un item por ID
  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  //Vacía el carrito
  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };

  //Busca un item por ID en el carrito, esta función es llamada por addItem antes de agregar el nuevo item
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
