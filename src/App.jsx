import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./components/context/CartContext";
import { DbProvider } from "./components/context/DbContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
    <DbProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </DbProvider>
    </>
  );
}

export default App;

// onAdd={(addData) => console.log("Cantidad agregada",addData.counter," Item to add:",addData.itemId)}
