import  { useState, useEffect } from "react";
// import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

// importar las funciones de Firebse que necesito para mostrar los productos:
import { collection, getDocs, where, query } from "firebase/firestore";
// getDocs obtengo los documentos de una colección
// collection, me permite obtener una colección
// Query para generar una consulta a la bd
// Where para agregar filtros a mis consultas

// importo la base de datos
import { db } from "../../services/config";

const ItemListContainer = (props) => {

  // creamos un estado para guardar los productos

  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

      getDocs(misProductos)
        .then(res => {
          const nuevosProductos = res.docs.map( doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))

        // si quisiera filtrar puedo usar el where:
        // const misProductos = query(collection(db, "productos"), where("precio", "<", 800));

    }, [idCategoria])

    // useEffect(() => {
    //   const funcion = idCategoria ? getProductosPorCategoria : getProductos;
    //   funcion(idCategoria)
    //     .then(res => setProductos(res))
    //   }, [idCategoria])




  return (
    <>
      <div>
        <h2 style={{margin: "1em 0 0.25em 0"}}>
          {props.greeting} 
        </h2>
        <ItemList productos={productos} />
      </div>
    </>
  )
}

export default ItemListContainer