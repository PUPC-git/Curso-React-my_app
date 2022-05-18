import React from 'react';

function TituloBateriaLitio() {
    return (<h3>Baterias de Litio</h3>)
}

//componente stateless o funcional
function BateriaLitio() {
    return (
        <div>
            <TituloBateriaLitio />
            <p>
            Gracias a las nuevas tecnologias que afectan a las baterías,
            la autonomia de los coches electricos está aumentrando a pasos agigantados.
            </p>
        </div>
    );
}

export default BateriaLitio;