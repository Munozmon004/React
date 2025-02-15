import "./App.css";

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer";



function App() {
    return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Ventas de Autos" />}
          />
          <Route
            path="/category/:catid"
            element={<ItemListContainer greeting="Compras por categoria" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
        <footer>
          <small>Created by Tienda-Online 2025.</small>
        </footer>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;