import ShopSection from "./ShopSection/ShopSection";

function Card({ cardItems, onAdd  }) {

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
          <ShopSection stock={card.stock} itemId={card.id} onAdd={onAdd} />
        </div>
      ))}
    </>
  );
}

export default Card;
