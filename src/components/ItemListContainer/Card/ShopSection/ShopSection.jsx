import { useState } from "react";

function ShopSection({stock, itemId, onAdd}) {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const subtractCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="card__counter">
        <button onClick={subtractCounter}>-</button>
        <span>{counter}</span>
        <button onClick={addCounter}>+</button>
      </div>
      <div className="card__addCart">
        <button onClick={() => onAdd({counter, itemId})} disabled={!stock}>Agregar</button>
      </div>
    </>
  );
}

export default ShopSection;
