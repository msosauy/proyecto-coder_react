import { useState } from "react";

const CheckoutForm = ({ onBuy }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function sendInputs() {
    onBuy({name, phone, email});
  }

  return (
    <>
      <label>Nombre</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <label>Teléfono</label>
      <input type="phone" onChange={(e) => setPhone(e.target.value)} />
      <label>Correo Electrónico</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => sendInputs()}>Cerrar Compra</button>
    </>
  );
};

export default CheckoutForm;
