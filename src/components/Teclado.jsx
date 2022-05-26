import React from 'react';

function Teclado() {

    //evento que controla si se ha pulsado la tecla ENTER
    let manejarTeclado = (event) => {
        if (event.charCode === 13) {
            alert("Se ha pulsado la tecla enter");
        }
    }

    return (
        <div className="App">
            <header className='App-header'>
                <input placeholder="Se lanzara alerta" onKeyPress={manejarTeclado}/>
                <input placeholder="No se lanzara alerta" />
            </header>
        </div>
    );
}

export default Teclado;