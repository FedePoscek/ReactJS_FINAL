import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import './Checkout.css';

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenID] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();

        // funciones y validaciones
        // Verificamos que los campos estén completos
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor, completá los campos");
            return;
        }

        // Validamos que los campos del email coincidan
        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        // Paso 1: Crear un objeto con todos los datos de la orden de compra
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                img: producto.item.img,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        // Paso 2: Guardar la orden en la base de datos y creo una nueva colección de "ordenes"
        addDoc(collection(db, "ordenes"), orden)
            // colocar un comportamiento adicional al cumplimiento de la promesa - then
            .then(docRef => {
                setOrdenID(docRef.id);
                vaciarCarrito();
            })
            // mostrar un error en caso de que no se pueda cumplir la promesa - catch
            .catch(error => {
                console.log("error al crear la orden", error);
                setError("Se produjo un error al crear la orden");
            })

            // setNombre(""),
            setApellido(""),
            setTelefono(""),
            setEmail(""),
            setEmailConfirmacion("");
            
        }
        // botón "Eliminar" en el checkout:
        const {eliminarProducto} = useContext(CarritoContext);

 // usando retorno temprano por si se eliminan todos los productos del carrito, siempre que no se haya mandado ninguna orden de compra
 if (cantidadTotal === 0 && !ordenId) {
    return (
      <>
        <h2 style={{margin: "1em 0 1em 0"}}>
          No hay productos en el carrito
        </h2>
        <Link to="/" className="botonFinalizarCompra"> Ver Productos </Link>
      </>
    );
  }


    // usando retorno temprano para borrar el formulario y dejar el número de orden y nombre de Usuario
  if (ordenId) {
    return (
      <>
        <p style={{margin: "2em 0 0.5em 0"}}>
            Gracias {nombre} por tu compra, tu número de orden es:           
        </p>
        <h2 style={{margin: "0.5em 0 1.25em 0"}}>
            {ordenId}
        </h2>
        <Link to="/" className="botonFinalizarCompra"> Ver Productos </Link>
      </>
    );
  }
    return (
        <div>
            <h2 style={{margin: "1em 0 0.5em 0"}}> CheckOut </h2> 
            <form id="form" onSubmit={manejadorFormulario}>
                {
                    carrito.map( producto => (
                        <div  key={producto.item.id}>
                            <div className="itemsCheckout">
                                <img className="imgDetalleCheckout" src={producto.item.img} alt={producto.item.nombre} />
                                <p><strong>{producto.item.nombre} </strong>x {producto.cantidad}</p>
                                <p><strong>$ {producto.item.precio * producto.cantidad}</strong></p>
                                <button className="trash-container" onClick={() => eliminarProducto(producto.item.id)}>
                                    <span className="trash"></span>
                                </button>

                            </div>
                        </div>
                    ))
                }
                 <p className="cantidadTotalCheckout"> Cantidad Total:<strong> {cantidadTotal} items</strong></p>

                <div className="form-container">
                
                    <div className="form-grupos">
                        <label htmlFor=""></label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre"/>
                    </div>

                    <div className="form-grupos">
                        <label htmlFor=""></label>
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" />
                    </div>

                    <div className="form-grupos">
                        <label htmlFor=""></label>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono"/>
                    </div>

                    <div className="form-grupos">
                        <label htmlFor=""></label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    </div>

                    <div className="form-grupos">
                        <label htmlFor=""></label>
                        <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} placeholder="Confirmación de email"/>
                    </div>
                
                </div>
                
                {/* Si hay error, que me lo muestre */}
                {
                    error && <p style={{color: "red"}}> {error} </p>
                }

                <button type="submit"> Finalizar Compra </button>
            </form>       

            { 
                ordenId && (
                    <strong> Gracias por tu compra, tu número de orden es: {ordenId} </strong>
                )
            }
        </div>
  )
}

export default Checkout