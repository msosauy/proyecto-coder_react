import { useState } from "react";
import Counter from "./Counter/Counter";

function Card({ cardItems, newItemToCart }) {
  const [nuevo, setNuevo] = useState([0, 0]);

  const addQuantity = (quantity) => {
    console.log(quantity);
  };

  return (
    <>
      {cardItems.map((card) => (
        <div className="card" key={card.id}>
          <div className="card__image">
            <img src={card.img} alt="img" />
          </div>
          <div className="card__info">
            <div className="card__info__left">
              <h2>{card.brand}</h2>
              <h3>{card.model}</h3>
            </div>
            <div className="card__info__right">
              <span>{card.price}</span>
            </div>
          </div>
          <Counter addQuantity={addQuantity}/>
          <div className="card__addCart">
            <button onClick={() => newItemToCart(nuevo)}>Agregar</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
