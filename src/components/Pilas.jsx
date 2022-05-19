import React from 'react';
import Autonomia from './Autonomia';
import Carga from './Carga';

function TituloPilasConvencionales() {
    return (<h3>Pilas convencionales</h3>)
}

function PilasConvencionales() {
    return (
        <div>
            <TituloPilasConvencionales />
            <p>
            A pesar del auge de las energias renovables,
            las pilas convencionales siguen utilizandose a diario.
            </p>
            <Autonomia km={0} />
            <Carga carga='Este tipo de baterias no se pueden cargar en las estaciones'/>
        </div>
    );
}

export default PilasConvencionales;