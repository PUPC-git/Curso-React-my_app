import React, { useEffect, useState } from 'react';

//usando hook useState.
//Se recomienda usar componentes funcionales por su facilidad de uso y compilacion
//al poderse usar los estados con los hooks.
function Bitcoin () {

    //Definimos bitcoin como variable de estado
    //setBitcoin como función que cambia el estado
    //y además el valor inicial de la variable de estado
    //es un hook de estado
    const [bitcoin, setBitcoin] = useState(0);

    //Control de eventos, metodo recomendable (pulsaciones onClick)
    const manejarPulsacion = (event) => {
        //binding entre la vista y el controlador
        //evitamos el comportamiento por defecto del evento, en este caso se evita 
        //redireccionamiento a google desde el a href
        event.preventDefault();
        console.log("objeto evento: ", event);
    }

    //definimos un hook de ciclo de vida, se ejecuta cada vez que hay un cambio
    useEffect(() => {
        console.log('El componente se ha renderizado')
    });

    return(
        <div>
            <h3>Cantidad de Bitcoins Actuales {bitcoin}</h3>
            <button onClick={() => setBitcoin(bitcoin + 1)}>
                Aumentar  
            </button>
            <button onClick={() => setBitcoin(bitcoin -1)}>
                Disminuir  
            </button>

            <br />
            <button onClick={(event) => {console.log("Objeto evento: ", event)}}>Púlsame</button>
            <button onClick={manejarPulsacion}>Pulsame</button>
            <a href="https://www.google.es" onClick={manejarPulsacion}>Ir a Google</a>
        </div>
    )

}

export default Bitcoin;