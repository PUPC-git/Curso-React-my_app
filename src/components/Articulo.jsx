import React,  { Component } from 'react';
import PilasConvencionales from './Pilas';
import BateriaLitio from './Baterias';


//Componente stateful o de clase
class Articulo extends Component {
    render() {
        return (
            <div>
                <PilasConvencionales />
                <BateriaLitio />
            </div>
        )
    }
}

export default Articulo;