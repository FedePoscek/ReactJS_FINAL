// 1) Importar el hook useState y el createContext para crear el contexto que almacenará toda la lógica de mi carrito de compras

import { useState, createContext } from "react";

// 2) Creamos un nuevo contexto
// export para que esté disponible en toda la app
// en el () le doy un valor inicial con un obejto de todo lo que necesito (todos los items que quiera vacios o en 0)
export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

// hago un componente que englobe todo lo que voy a hacer con el carro
export const CarritoProvider = ({children}) => {
    // 3) creo un estado local "carrito" con useState

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    // 4) agregamos algunos metodos al componente para manipular el carrito de compras.

    // provisoriamente verifico por consola

    console.log(carrito);

    
    // funcion para agregar al carrito evitando duplicados

    const agregarProducto = (item, cantidad) => {
        // verifico si ya está en el carrito
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if(!productoExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
            // prev flechita [...prev, item, cantidad] se usa para crear un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto que representa el nuevo producto.
            // es como un carrito.push(), pero React usa el (prev)
        } else {
            const carritoActualizado = carrito.map(prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad:prod.cantidad + cantidad};
                } else {
                    return prod;
                }
        });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
            
    }}

    // funcion para eliminar producto: 

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    // funcion para vaciar el carrito

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal}}>
            {children}
        </CarritoContext.Provider>
        // en el value enviamos el valor actual del carrito y los metodos a los componentes de mi App que lo necesiten.
        // usamos Children para represnetar a todos aquellos componentes que puedan necesitar el carrito y sus metodos
        )
}

