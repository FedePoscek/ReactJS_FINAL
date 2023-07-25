import { useState, useEffect } from "react"
import "./ItemCount.css";


    const ItemCount = ({stock, inicial, funcionAgregar}) => {
        const [contador, setContador] = useState(inicial);
        
        // cambio el color del contador (ItemCountStockDisponible y agregarCarritoButton) que les pasé esa data como props "style={{color: color}}"

        const [color, setColor] = useState("black");        
        useEffect( () => {
                if (contador > (Math.floor(stock*0.9))) {
                    setColor("red");            
                  } else {
                    setColor("#202933");
                  }
        }, [contador])


        const incrementarContador = () => {
            if (contador < stock) {
                setContador(contador + 1);
            }
        }
    
        const decrementarContador = () => {
            if (contador > inicial) {
                setContador(contador - 1);
            }
        }

  return (
    <>
        <div className="ContenedorCounter">
            <button className="ItemCountButton" onClick={decrementarContador}> - </button>

            <p className="NumeroCounter"> {contador} </p>

            <button className="ItemCountButton" onClick={incrementarContador}> + </button>
        </div>

        <div className="ItemCountStockDisponible" style={{color: color}}>

        {/* pasa de plural a singular si quedan varios, 1 o 0 productos*/}
        {
            ((stock - contador) > 1) || ((stock - contador) == 0) ? `Quedan ${stock-contador} productos disponibles` : `Queda ${stock-contador} producto disponible`
        }

        </div>
        
        <div>
            <button className="agregarCarritoButton" id="boton" onClick={() => funcionAgregar(contador) } style={{color: color}}> Agregar al carrito </button>
        </div>
    </>
    // style={{color: color}} - tiene doble llave por que es un objeto que le paso valores
    // las funciones van sin parentesis 
  )
}

export default ItemCount