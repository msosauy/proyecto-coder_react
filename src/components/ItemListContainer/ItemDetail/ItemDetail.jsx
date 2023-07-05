import ShopSection from "../ItemDetailContainer/ShopSection/ShopSection";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ id, brand, model, img, stock, info, onAdd }) => {
  return (
    <article className="item__detail">
      <header className="item__header">
        <Link to={"/"}><button style={{width:"100px"}}>Cerrar</button></Link>
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
        <ShopSection stock={stock} itemId={id} onAdd={onAdd}/>
      </section>
    </article>
  );
};

export default ItemDetail;
