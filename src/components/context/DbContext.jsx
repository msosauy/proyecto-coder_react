import { createContext, useState } from "react";
import { db } from "./../config/firebase";
import {
  getDocs,
  collection,
  getCountFromServer,
  doc,
  updateDoc,
} from "firebase/firestore";

export const DbContext = createContext();

export const DbProvider = ({ children }) => {
  const [dbItems, setDbItems] = useState([]);

  const itemsRef = collection(db, "items");
  const ordersRef = collection(db, "orders");

  //Setea y retorna dbItems como un array con todos los items de la DDBB 
  const getItemsList = async () => {
    const data = await getDocs(itemsRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDbItems(filteredData);
    return filteredData;
  };

  const getOrderById = async (newOrderId) => {
    const data = await getDocs(ordersRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
    }))
    return filteredData.find((e) => e.id === newOrderId)
  }

  //Devuelve el item correspondiente al ID solicidato
  const getProductById = async (orderId) => {
    const itemsList = await getItemsList()
    return itemsList.find((prod) => prod.id === orderId);
  };

  //Devuelve todos los item dentro de la categoría indicada
  const getProductByCategory = async (categoryId) => {
    return dbItems.filter((prod) => prod.category === categoryId);
  };

  //Devuelve la cantidad de ordenes en DDBB "orders"
  const getOrdersLength = async () => {
    const data = await getCountFromServer(ordersRef);
    return data.data().count;
  };

  const updateItemStock = async (id, quantity) => {
    const itemDoc = doc(itemsRef, id);

    const itemToUpdate = await getProductById(id)
    const stockOperation = itemToUpdate.stock - quantity
    
    await updateDoc(itemDoc, { stock: stockOperation });
  };

  return (
    <DbContext.Provider
      value={{
        getItemsList,
        getProductById,
        getProductByCategory,
        getOrdersLength,
        updateItemStock,
        getOrderById
      }}
    >
      {children}
    </DbContext.Provider>
  );
};
