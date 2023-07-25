import { useContext } from 'react';
import { useEffect } from "react"
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'
import imgCarrito from '../../assets/shopping_cart.svg';

const CartWidget = () => {

    // me traigo CantidadTotal del carrito para usarla en el tab de la página y en el número del carrito
    const {cantidadTotal} = useContext(CarritoContext);

    useEffect( () => {
        // cambio el título del Tab según haya o no items en el carro
        {
        (cantidadTotal) ? (document.title = `Tenés ${cantidadTotal} items en carrito`) : (document.title = `Bienvenidos a ElectroStore`)
        }
    }, [cantidadTotal])

    return (
        <div className='cart'>
            <Link to="/cart">
                <div className='imgNumCarrito'>
                    <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
                
                    <div className='numCarritoContenedor'>
                        <div className='numCarrito'>
                            
                            { 
                            // si es mayor a 0 se actualiza, si no, deja el 0
                            (cantidadTotal > 0) ? (cantidadTotal) : (cantidadTotal)
                            
                            }
                            
                            {/* {
                            // si es menor a 0 se desmonta
                            cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                            } */}
                        </div>
                    </div>

                </div>
            </Link>

        </div>
    )
}

export default CartWidget