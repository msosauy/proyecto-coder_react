import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import "./CheckoutForm.css";

const Checkout = () => {
  return <h1>checkout</h1>
  // const [loading, setLoading] = useState(false);
  // const [orderId, setOrderId] = useState("");

  // const { cart, total, clearCart } = useContext(CartContext);

  // const createOrder = async ({ name, phone, email }) => {
  //   setLoading(true);

  //   try {
  //     const objOrder = {
  //       buyer: {
  //         name,
  //         phone,
  //         email,
  //       },
  //       items: cart,
  //       total: total,
  //       date: Timestamp.fromDate(new Date()),
  //     };

  //     const batch = writeBatch(db);

  //     const outOfStock = [];

  //     const ids = cart.map((prod) => prod.id);

  //     const productsRef = collections(db, "products");

  //     const ptoductsAddedFromFirestore = await getDocs(
  //       query(productsRef, where(document(), "in"))
  //     );

  //     const { docs } = ptoductsAddedFromFirestore;

  //     docs.forEach((doc) => {
  //       const dataDoc = doc.data();
  //       const stockDb = dataDoc.stock;

  //       const productAddedToCart = cart.find((prod) => prod.id === doc.id);
  //       const prodQuantity = productAddedToCart?.quantity;

  //       if (stockDb >= prodQuantity) {
  //         batch.update(doc.ref, { stock: sotckDb - prodQuantity });
  //       } else {
  //         outOfStock.push({ id: doc.id, ...dataDoc });
  //       }
  //     });

  //     if (outOfStock.length === 0) {
  //       await batch.commit();

  //       const orderRef = collection(db, "orders");

  //       const orderAdded = await addDoc(orderRef, objOrder);

  //       setOrderId(orderAdded.id);
  //       clearCart();
  //     } else {
  //       console.error("Hay productos que están fuera de stock");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (loading) {
  //   return <h1>Se está generando su orden...</h1>;
  // }

  // if (orderId) {
  //   return <h1>El ID de su orden es: ${orderId}</h1>;
  // }

  // return (
  //   <div className="checkout__form__container">
  //     <div className="checkout__form">
  //       <h1>Checkout</h1>
  //       <CheckoutForm />
  //       <button>Cerrar Compra</button>
  //     </div>
  //   </div>
  // );
};

export default Checkout;
