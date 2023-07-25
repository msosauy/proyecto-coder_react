import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./components/context/CartContex";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer onAdd={(addData) => console.log("Cantidad agregada",addData.counter," Item to add:",addData.itemId)}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 NOT FUND</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
