import img1 from "./components/ItemListContainer/Card/assets/img1.png";
import img2 from "./components/ItemListContainer/Card/assets/img2.png";
import img3 from "./components/ItemListContainer/Card/assets/img3.png";
import img4 from "./components/ItemListContainer/Card/assets/img4.png";

const products = [
    {
      id: 54135,
      brand: "Mikrotik",
      model: "RB951ui-2hnd",
      price: 100,
      img: img1,
      info: "The RB951ui-2hnd is a new multi port device, our first to be running an ARM architecture CPU for higher performance than ever before. The RB3011 has ten Gigabit ports divided in two switch groups, an SFP cage and for the first time a SuperSpeed full size USB 3.0 port, for adding storage or an external 3G/4G modem.",
      stock: 1,
      category: "SOHO"
    },
    {
      id: 25494,
      brand: "Mikrotik",
      model: "RB951ui-G",
      price: 150,
      img: img2,
      info: "The RB951ui-G is a new multi port device, our first to be running an ARM architecture CPU for higher performance than ever before. The RB3011 has ten Gigabit ports divided in two switch groups, an SFP cage and for the first time a SuperSpeed full size USB 3.0 port, for adding storage or an external 3G/4G modem.",
      stock: 2,
      category: "SOHO"
    },
    {
      id: 44689,
      brand: "Mikrotik",
      model: "RB3011",
      price: 300,
      img: img3,
      info: "The RB3011 is a new multi port device, our first to be running an ARM architecture CPU for higher performance than ever before. The RB3011 has ten Gigabit ports divided in two switch groups, an SFP cage and for the first time a SuperSpeed full size USB 3.0 port, for adding storage or an external 3G/4G modem.",
      stock: 3,
      category: "Enterprise"
    },
    {
      id: 34672,
      brand: "Mikrotik",
      model: "RB952-hAP",
      price: 250,
      img: img4,
      info: "The RB952-hAP is a new multi port device, our first to be running an ARM architecture CPU for higher performance than ever before. The RB3011 has ten Gigabit ports divided in two switch groups, an SFP cage and for the first time a SuperSpeed full size USB 3.0 port, for adding storage or an external 3G/4G modem.",
      stock: 4,
      category: "Profesional"
    },
  ];

export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === itemId))
    }, 500);
  })
}

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 500);
  })
}