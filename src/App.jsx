import { useState } from 'react'
import LogoStore from '/public/logoStore.jpg'
import "./App.css";
import CardProduct from "./components/CardProduct";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <>
      <div className='navbar'>
        <a href="#">
          <img src={LogoStore} className="logo" alt="logo Tienda" />
        </a>
        <div class="button">
        <button class="boton"><a href="./index.html">Inicio</a></button>
        <button class="boton"><a href="./index.html">Ubicaciones</a></button>
        <button class="boton"><a href="./index.html">Proximamente</a></button>
        <button class="boton"><a href="./index.html">Ofertas</a></button>
        <div id="icono-carrito" onclick="alternarCarrito()">
          <span id="contador-carrito">0</span> 🛒
        </div>
      </div>
    </div>
    <h1>REACT STORE</h1>
      <section>
        <ItemListContainer>
          {/* ACA VAN LOS CHILDREN */}
          <CardProduct
            price={4.1}
            title="Galletas Oreo"
            text="Caja Galletas c/12"
            img="/public/oreocookies.webp"
          />
          <CardProduct
            price={3.2}
            title="Jugo de Naranja"
            text="Tropicana 46oz"
            img="/public/orange-juice.webp"
          />
          <CardProduct
            price={5.5}
            title="Barra Pan"
            text="doble integral"
            img="/public/barra-pan.webp"
          />
        </ItemListContainer>
      </section>
    </>
  )
}

export default App
