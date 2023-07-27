import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css';

const CartItem = ({item, cantidad}) => {

    // me lo traigo con el useContext para tenerlos disponibles
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className="CartItemContainer">
        <img className="imgDetalleCarrito" src={item.img} alt={item.nombre} />
        <h3> {item.nombre} </h3>
        <p> Cantidad: <strong> {cantidad} </strong></p>
        <p style={{margin: "0 0 0.5em 0"}}> Precio: <strong> {item.precio * cantidad} </strong></p>

        <button className="trash-container" onClick={() => eliminarProducto(item.id)}>
          <span className="trash"></span>
        </button>

    </div>
  )
}

export default CartItem