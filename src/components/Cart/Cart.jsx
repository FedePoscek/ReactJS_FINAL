import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';


const Cart = () => {
  // me lo traigo con el useContext para tenerlos disponibles
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  // usando retorno temprano
  if (cantidadTotal === 0) {
    return (
      <>
        <h2 style={{margin: "1em 0 1em 0"}}>
          No hay productos en el carrito
        </h2>
        <Link to="/" className="botonFinalizarCompra"> Ver Productos </Link>
      </>
    );
  }

  return (

    <div className="CartTotalContainer">
          
          <h2 style={{margin: "1em 0 1em 0"}}> Carrito de compras </h2>

      <div className="CartOrganizacionItems">
      {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}

      </div>
      <h2> Total: $ {total} </h2>
      <h4> Cantidad Total: {cantidadTotal} </h4>
      <div className="botonesCart">
        <button className="botonVaciarCarrito" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout" className="botonFinalizarCompra"> Finalizar Compra </Link>
      </div>
    </div>
  );
};

export default Cart;
