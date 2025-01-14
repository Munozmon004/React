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
          <NavLink to="/item">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/category/autos">Nuevos Modelos</NavLink>
        </li>
        <li>
          <NavLink to="/category/marcas">Marcas</NavLink>
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