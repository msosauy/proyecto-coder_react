import { createContext, useState } from "react";
import { db } from "./../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export const DbContext = createContext();

export const DbProvider = ({ children }) => {
  const [dbItems, setDbItems] = useState([]);

  const itemsColelectionRef = collection(db, "items");

  const getItemsList = async () => {
    const data = await getDocs(itemsColelectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    setDbItems(filteredData)
    return filteredData
  };


  const getProductById = async (categoryId) => {
    return dbItems.find(prod => prod.category === categoryId)
  }

  const getProductByCategory = async (categoryId) => {
    return dbItems.filter(prod => prod.category === categoryId)
  }

  return (
    <DbContext.Provider value={{ getItemsList, getProductById, getProductByCategory }}>
      {children}
    </DbContext.Provider>
  );
};
