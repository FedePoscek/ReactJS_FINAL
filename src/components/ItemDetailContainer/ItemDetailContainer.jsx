import  { useState, useEffect } from "react";
// import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

// importamos las nuevas funciones - getDoc - 1 solo doc
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);

  const {idItem} = useParams();

  useEffect( () => {
    const nuevoDoc = doc(db, "inventario", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoPreoducto = {id: res.id, ...data}
        setProducto(nuevoPreoducto);
      })
      .catch(error => console.log(error))
  }, [idItem])

//   useEffect( () => {
//     getUnProducto(idItem)
//         .then(res => setProducto(res))
// }, [idItem])

  return (
    <h2>
     <ItemDetail {...producto} />

    </h2>
  )
}

export default ItemDetailContainer