import React from "react";

const CartItem = ({ id, model, quantity, price, removeItem }) => {
  return (
    <div key={Math.floor(Math.random()*1000)} className="card__checkout__item">
      <div className="card__checkout__title">
        <h3>{model}</h3>
      </div>
      <div className="card__checkout__quantity">
        <h4>{`Cantidad: ${quantity}`}</h4>
      </div>
      <div className="card__checkout__unitprice">
        <h4>{`Precio por unidad: $ ${price}`}</h4>
      </div>
      <div className="card__checkout__subtotal">
        <h3>{`SubTotal $ ${price * quantity}`}</h3>
      </div>
      <button onClick={() => removeItem(id)}>X</button>
    </div>
  );
};

export default CartItem;
