import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import img1 from "./components/ItemListContainer/Card/assets/img1.png";
import img2 from "./components/ItemListContainer/Card/assets/img2.png";
import img3 from "./components/ItemListContainer/Card/assets/img3.png";

function App() {
  const cardItems = [
    {
      id: 54135,
      brand: "Mikrotik",
      model: "RB951ui-2hnd",
      price: "U$S 110",
      img: img1,
      stock: 2
    },
    {
      id: 25494,
      brand: "Mikrotik",
      model: "RB951ui-G",
      price: "U$S 150",
      img: img2,
      stock: 3
    },
    {
      id: 44689,
      brand: "Mikrotik",
      model: "RB3011",
      price: "U$S 300",
      img: img3,
      stock: 4
    },
  ];

  return (
    <>
      <NavBar />
      <ItemListContainer cardItems={cardItems} />
    </>
  );
}

export default App;
