import React, { useState } from "react";
import "./Navbar.css"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return ( 
        <div className="navbar">
            <div className="nav_logo"> <img src="https://res.cloudinary.com/dgo96kikm/image/upload/v1681614796/clipart67671_p36gn7.png"/><span>A.G.T Fashion&Kitchen</span></div>
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