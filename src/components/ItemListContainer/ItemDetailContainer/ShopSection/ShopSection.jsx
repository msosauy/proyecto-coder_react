import { useState } from "react";

function ShopSection({stock, onAdd}) {
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const subtractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="card__counter">
        <button onClick={subtractQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={addQuantity}>+</button>
      </div>
      <div className="card__addCart">
        <button onClick={() => onAdd(quantity)} disabled={!stock || !quantity}>Comprar</button>
      </div>
    </>
  );
}

export default ShopSection;
