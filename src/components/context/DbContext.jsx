import { createContext, useState } from "react";
import { db } from "./../config/firebase";
import { getDocs, collection, getCountFromServer } from "firebase/firestore";

export const DbContext = createContext();

export const DbProvider = ({ children }) => {
  const [dbItems, setDbItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const itemsRef = collection(db, "items");
  const ordersRef = collection(db, "orders");

  //Setea y retorna dbItems como un array con todos los items de la DDBB y 
  const getItemsList = async () => {
    const data = await getDocs(itemsRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    setDbItems(filteredData)
    return filteredData
  };

  //Devuelve el item correspondiente al ID solicidato
  const getProductById = async (itemId) => {
    return dbItems.find(prod => prod.id === itemId)
  }

  //Devuelve todos los item dentro de la categoría indicada
  const getProductByCategory = async (categoryId) => {
    return dbItems.filter(prod => prod.category === categoryId)
  }

  //Devuelve la cantidad de ordenes en DDBB "orders"
  const getOrdersLength = async () => {
    const data = await getCountFromServer(ordersRef)
    return data.data().count
  }

  return (
    <DbContext.Provider value={{ getItemsList, getProductById, getProductByCategory, getOrdersLength}}>
      {children}
    </DbContext.Provider>
  );
};
