import React from 'react';

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
        </div>
    );
}

export default PilasConvencionales;