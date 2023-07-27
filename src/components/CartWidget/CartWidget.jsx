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
                            // si la cantidad de items en el carro es igual a 0 pone "-", si no, se actualiza
                            (cantidadTotal == 0) ? ("-") : (cantidadTotal)
                            }
                            
                        </div>
                    </div>

                </div>
            </Link>

        </div>
    )
}

export default CartWidget