import { useState } from "react";

const CheckoutForm = ({ onBuy }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  function sendInputs() {
    onBuy({name, phone, email});
  }

  return (
    <>
      <label>Nombre</label>
      <input type="text" onChange={handleName} />
      <label>Teléfono</label>
      <input type="phone" onChange={handlePhone} />
      <label>Correo Electrónico</label>
      <input type="email" onChange={handleEmail} />
      <button onClick={() => sendInputs()}>Cerrar Compra</button>
    </>
  );
};

export default CheckoutForm;
