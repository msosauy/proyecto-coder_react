import Card from "./Card/Card";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DbContext } from "../context/DbContext";

function ItemListContainer() {

  const {getItemsList, getProductByCategory} = useContext(DbContext);
  
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getItemsList;
    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
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
