import { Link } from "react-router-dom";
import Button from "./Button";
import "./CardProduct.css";

function Item(props) {
  const { price, title, text, year, img, stock, id } = props;

  return (
    <div className="card">
      <img src={img} alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <p className="card-year">Año: {year}</p>
        <div>
        
          <p className="card-price">$ {price}</p>
        </div>
        <p className="card-stock">Piezas en el almacen: {stock}</p>
        <Link to={`/item/${id}`}>
          <Button>Ver detalle</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;