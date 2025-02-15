import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <h2 className="navbar-brand">Tienda-Online</h2>
      </div>
      <ul className="navbar-nav">
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>

        <li>
          <NavLink to="/cart">Carrito</NavLink>
        </li>
        <li>
          <NavLink to="/category/expensive">Modelos Caros</NavLink>
        </li>
        <li>
          <NavLink to="/category/cheap">Modelos Mas Baratos</NavLink>
        </li>
        <li>
          <NavLink to="/category/acesorios">Accesorios</NavLink>
        </li>
        <li>
          <a href="https://www.facebook.com/">Nuestras redes</a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}