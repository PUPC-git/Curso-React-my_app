import React,  { Component } from 'react';
import PilasConvencionales from './Pilas';
import BateriaLitio from './Baterias';
import Hidrogeno from './Hidrogeno';
import Likes from './Likes';
import Bitcoin from './Bitcoin';
import Formulario from './formulario';
import Teclado from './Teclado';
import Raton from './Raton';
import Imagen from './Imagen';

//Componente stateful o de clase
//Componente contenedor, al no tener logica, solo mostramos el resto de componentes
class Articulo extends Component {
    render() {
        return (
            <div>
                <PilasConvencionales />
                <BateriaLitio />
                <Hidrogeno />
                <Likes />
                <Bitcoin />
                <Formulario />
                <Teclado />
                <Raton />
                <Imagen />
            </div>
        )
    }
}

export default Articulo;