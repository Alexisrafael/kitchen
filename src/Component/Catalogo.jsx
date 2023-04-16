import React from "react";
import Uniforme from "../calalogo.json"
import "./Catalago.css"

const Catalogo = () => {
    return ( 
        <div>
            <h1>Catalogo</h1>
            <div width="100%" height="100%" className="card">
            {Uniforme ? Uniforme.uniformes.map((a)=>{
                return (
                    <div className="conten" key={a.id} >
                        <img width="50rem" height="50rem" src={a.image.map((a)=> a)} />
                        <div>
                            <span>{a.name}</span>
                        </div>
                    </div>
                )
            }) : ''}
            </div>
        </div>
    );
}

export default Catalogo;