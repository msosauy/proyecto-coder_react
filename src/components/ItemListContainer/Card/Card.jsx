import React from "react";
import { Link } from "react-router-dom";

function Card({ cardItems }) {
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
              <span>U$S {card.price}</span>
              <h4>Stock {card.stock}</h4>
            </div>
          </div>
          <div className="card__bottom">
            <Link to={`/item/${card.id}`}><button style={{ width: "100px" }}>Ver detalle</button></Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
