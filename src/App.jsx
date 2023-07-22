import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import { DataProvider } from "./components/context/DataContex";

function App() {
  return (
    <>
    <DataProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer onAdd={(addData) => console.log("Cantidad agregada",addData.counter," Item to add:",addData.itemId)}/>} />
          <Route path="*" element={<h1>404 NOT FUND</h1>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
    </>
  );
}

export default App;
