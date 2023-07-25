// JSX es una extensión de JAVASCRIPT
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// importo el CONTEXT
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

/*
REACT ROUTER: librería de enrutamiento para React, navegar entre componentes sin recargar la página
1. Instalar: npm install react-router-dom
2. Importamos algunos componentes:
    BrowserRouter, Routes, Route
    BrowserRouter: Envuelve todos los componentes de nuestra app y habilita la navegacion entre ellos.
    Routes: Definir las rutas de navegación
    Route: Define una ruta en específico
    Tenemos que pasarle la prop "Path" con la ruta a vincular y el componenete a renderizar cuando hacemos click
*/

const App = () => {

  // acá va la parte lógica

  // en el return va la interfaz del usuario
  return (
    // el div general es por que cada componente debe retornar UN elemento, pero los dejamos vacios "FRAGMENTS"
    <>
    <BrowserRouter>
    <CarritoProvider>
        <NavBar />
        <Routes>
          <Route />
          {/* el "/" en el path es para definir la home */}
          <Route path='/' element={<ItemListContainer greeting = {"Bienvenidos a la tienda"} />}/>
          <Route path='categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          {/* el "*" en el path es para las paginas que no existen */}
          <Route path='*' element={ <h2 style={{margin: "1em 0 1em 0"}}>Sitio en Construcción</h2>}/>
        </Routes>
        <Footer alumno={"Federico Poscek"} curso={"curso: 43260 REACT JS"}/>
      </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App