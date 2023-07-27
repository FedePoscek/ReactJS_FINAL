import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import imgLogo from '../../assets/Logo_ElectroStore.svg';
import { useState } from "react";


// Link para la general
// Navlink me permite aplicarle estilos css

const NavBar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    // función manejadora para abrir y cerrar el navegador responsive
    const ManejadorClickNavResponsive = () => {
        if (!isNavExpanded) {
            setIsNavExpanded(true);
        } else {
            setIsNavExpanded(false)
        }
    }

    return (
        <header>
            <nav className="navigation">
                <Link to="/">
                    <img className="imgLogoTienda" src={imgLogo} alt="ElectroStore" />
                </Link>

                <button className="hamburger" onClick={ManejadorClickNavResponsive}>

                    {/* SVG "Hamburguer" M6 18L18 6M6 6l12 12 */}
                    {/* SVG "X" M4 6h16M4 12h16M4 18h16 */}
                   
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={2}
                    >
                        <path 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={ isNavExpanded ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" }
                        />
                    </svg>
                </button>


                <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>

                <ul>
                    <li>
                        <NavLink to="categoria/1">
                            <button onClick={ManejadorClickNavResponsive}>Notebooks</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/2">
                            <button onClick={ManejadorClickNavResponsive}>Celulares</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/3">
                            <button onClick={ManejadorClickNavResponsive}>Tablets</button>
                        </NavLink>
                    </li>           
                </ul>

            </div>
                <CartWidget />
            </nav>
            
        </header>
    )
}

export default NavBar