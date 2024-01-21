import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"


const NavBar = () => {

    return(
        <>
        <h1>
            <img src="./img/logo.png" alt="Logo" />
        </h1>

        <ul>
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Tienda</li>
            <li>Contacto</li>
        </ul>

        <CartWidget/>
        </>
    )
}

export default NavBar;