import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DbContext } from "./../../context/DbContext";
import "./../ItemDetail/ItemDetail.css";

const ItemDetailContainer = () => {

  const {getProductById} = useContext(DbContext);

  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  },[itemId]);

  return (
    <div className="ItemDetailContainer bottomSection">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
