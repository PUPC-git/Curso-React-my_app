import React from 'react';

function Raton() {
    //control de eventos del raton
    /*
    onClick
    onContextMenu
    onDoubleClick
    onDrag
    onDragEnd
    onDragEnter
    onDragExit
    onDragLeave
    onDragOver
    onDragStart
    onDrop
    onMouseDown
    onMouseEnter
    onMouseLeave
    onMouseMove
    onMouseOut
    onMouseOver
    onMouseUp
    */

    let manejaEntraRaton = (event) => {
        console.log("Entra el ratón", event);
    };
    
    let manejaSaleRaton = (event) => {
        console.log("Sale el ratón", event);
    };
    
    let manejaClickRaton = (event) => {
        console.log(`El usuario pulsa en x: ${event.clientX}, y: ${event.clientY}`);
    };

    //ejemplo de evento onTouch para pantallas tactiles
    /*
    onTouchCancel
    onTouchEnd
    onTouchMove
    onTouchStart
    */
    const manejarPulsacion = (event) => {
        console.log("El tipo de este evento es: ", event.type);
    };


    return (
        <div className="App">
          <header className="App-header">
            <button
              onMouseEnter={manejaEntraRaton} 
              onMouseLeave={manejaSaleRaton}
              onClick={manejaClickRaton}>
                Pruebas con Eventos de ratón
            </button>
            <button onTouchStart={manejarPulsacion} onClick={manejarPulsacion}>Púlsame</button>
          </header>
        </div>
    );
}

export default Raton;