import React from "react";

const Carga = (props) => {
    return (
        <ul>
            <li>Carga rapida en estación de repostaje: {props.carga}</li>
        </ul>
    )
}

//lo mismo que lo anterior pero con una funcion
function Carga2(props) {
    return (
        <ul>
            <li>Carga rápida en estación de repostaje: {props.carga}</li>
        </ul>
    )	
}

export default Carga;