import "./ItemDetail.css";
import { NavLink, Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

import { CarritoContext } from "../../context/CarritoContext";
import { useContext, useState } from "react";



const ItemDetail = ({id, nombre, precio, img, stock, idCat, nombreCat, descripción}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {

    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio, img};
    agregarProducto(item, cantidad);
  }


  return (
  
    <div className='ItemContainerDetail'>
      <div className='cardProductoDetail'>
      <h2>{nombre} </h2>

        <div className="cardGrid">

          <div>
            <img className='imgProductoDetail' src={img} alt={nombre} />
          </div>

          <div>
            <p>U$S {precio} </p>
            {/* <p>ID: {id} </p> */}
            <p className="cardDetailInfo">{descripción} </p>
            <div className="botonesFinalizarItemDetail">            
              
              {
                agregarCantidad > 0 ? (<Link to="/cart" className="botonFinalizarCompra"> Finalizar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
              }

                {/* Vuelvo a la categoria que estaba navegando*/}
              <NavLink to={`/categoria/${idCat}`}>
                <button className='btnProducto'> Ver más {`${nombreCat}`} </button>
              </NavLink>

            </div>
          </div>

        </div>
    </div>
  </div>
  
  )
}

export default ItemDetail



