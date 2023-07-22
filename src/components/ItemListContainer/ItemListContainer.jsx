import Card from "./Card/Card";
import "./ItemListContainer.css";
import { getProducts, getProductByCategory } from "./../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error("msosa" + error);
      });
  }, [categoryId]);

  return (
    <main>
      <section className="topSection">
        <Card cardItems={products} />
      </section>
    </main>
  );
}

export default ItemListContainer;
