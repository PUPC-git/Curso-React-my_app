import React from 'react';
import Autonomia from './Autonomia';

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
            <Autonomia km='Con este tipo de baterias no se puede' />
        </div>
    );
}

export default PilasConvencionales;