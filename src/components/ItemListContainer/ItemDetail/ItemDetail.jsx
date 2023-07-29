import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ShopSection from "../ItemDetailContainer/ShopSection/ShopSection";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, brand, model, img, stock, info, price }) => {
  const { addItem } = useContext(CartContext);

  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      model,
      price,
      brand,
    };

    addItem(item, quantity);
  };

  return (
    <article className="item__detail">
      <header className="item__header">
        <Link to={"/"}>
          <button className="closeButton">X</button>
        </Link>
      </header>
      <section className="item__main__section">
        <section className="item__left__section">
          <picture>
            <img src={img} alt="item_img" />
          </picture>
        </section>
        <section className="item__right__section">
          <div className="item__sec">
            <h2 className="item__detail__tittle">{model}</h2>
            <h3 className="item__detail__subTittle">{brand}</h3>
            <h4>Stock{stock}</h4>
          </div>
          <p>{info}</p>
        </section>
      </section>
      <section className="shop">
        {quantityAdded > 0 ? (
          <>
            <Link to={"/"}>
              <button  style={{ width: "150px" }}>Continuar comprando</button>
            </Link>
            <Link to={"/cart"}>
              <button style={{ width: "150px" }}>Finalizar Compra</button>
            </Link>
          </>
        ) : (
          <ShopSection stock={stock} onAdd={handleOnAdd} />
        )}
      </section>
    </article>
  );
};

export default ItemDetail;
