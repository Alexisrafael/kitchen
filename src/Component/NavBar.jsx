import React, { useState } from "react";
import "./Navbar.css"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return ( 
        <div className="navbar">
            <div className="nav_logo"> A.E.G Fashion And Kitchen</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="/"> Inicio </a>
                <a href="/catalogo"> Catalogo </a>
                <a href="/inf"> Quienes somos </a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default NavBar;