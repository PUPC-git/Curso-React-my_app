import React, { useState } from 'react';
import logo from '../logo.svg';


//eventos de control para imagenes
function Imagen() {
    const [reactLogo, setReactLogo] = useState(logo);
    // onLoad
    const cargaImagen = (event) => {
        console.log("La imagen se ha cargado correctamente");
    };
    // onError
    const errorImagen = (event) => {
        console.log("Error al cargar la imagen");
    }

    return (
        <div className="App">
          <header className="App-header">
            <h1>Eventos en React</h1>
      
            <img width="256" src={reactLogo} onLoad={cargaImagen} onError={errorImagen} />
      
            <button onClick={() => {setReactLogo(logo)}}>Cargar correctamente el logo</button>
            <button onClick={() => {setReactLogo('')}}>Cargar con error el logo</button>
          </header>
        </div>
      );
}

export default Imagen;