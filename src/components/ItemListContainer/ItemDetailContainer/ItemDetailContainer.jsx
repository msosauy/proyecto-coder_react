import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../../../asyncMock";
import { useParams } from "react-router-dom";
import "./../ItemDetail/ItemDetail.css";

const ItemDetailContainer = ({ onAdd }) => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(parseInt(itemId))
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  },[itemId]);

  return (
    <div className="ItemDetailContainer bottomSection">
      <ItemDetail onAdd={onAdd} {...product} />
    </div>
  );
};

export default ItemDetailContainer;
