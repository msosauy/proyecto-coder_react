import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { DbContext } from "../context/DbContext";
import CheckoutForm from "./CheckoutForm";
import CheckoutOrder from "./CheckoutOrder";
import { db } from "../config/firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import "./Checkout.css";
import "./CheckoutForm.css";

const Checkout = () => {
  const [finalOrder, setFinalOrder] = useState([]);
  const [endedOrder, setEndedOrder] = useState(false);

  const { cart, total, clearCart } = useContext(CartContext);
  const { getOrdersLength, updateItemStock, getOrderById } =
    useContext(DbContext);

  //Referencia a BBDD collections
  const orderRef = collection(db, "orders");

  //CREATE ORDER

  const CreateOrder = async ({ name, phone, email }) => {
    //Obtiene orders length a traves de DbContext
    const ordersLength = await getOrdersLength();
    const newOrderId = ordersLength + 1;

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        id: newOrderId,
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      //Agrega la nueva orden a la DDBB then(update STOCK)
      await addDoc(orderRef, objOrder)
        .then(
          objOrder.items.forEach(async (el) => {
            await updateItemStock(el.id, el.quantity);
          })
        )
        .then(async () => {
          let newOrder = await getOrderById(newOrderId);
          setFinalOrder(newOrder);
          setEndedOrder(true)
        });
    } catch (error) {
      console.error(error);
    } finally {
      clearCart();
    }
  };

  if (endedOrder) {
    return (
      <div className="checkout__orderEnded">
        <h1>Su orden ha sido confirmada. </h1>
        <h2>{`ID de la orden: ${finalOrder.id}`}</h2>
        <CheckoutOrder order={finalOrder} />
      </div>
    );
  }

  return (
    <div className="checkout__form__container">
      <div className="checkout__form">
        <h1>Checkout</h1>
        <CheckoutForm onBuy={CreateOrder} />
      </div>
    </div>
  );
};

export default Checkout;
