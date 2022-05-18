import React from 'react';

const styles = {
    heiht: 250,
    width: 250
}

function TituloHidrogeno() {
    return (<h3>Baterias de Hidrógeno</h3>)
}

class Hidrogeno extends React.PureComponent {
    render() {
        return (
            <div>
                <TituloHidrogeno />
                <p>
                    Las baterías de hidrogeno, es una alternativa muy interesante a las baterías electricas
                </p>
                <img style={ styles }
                    src='https://noticias.mapfre.com/media/2019/01/HidrogenoCombustible800x472.jpg' alt=''></img>
            </div>
        )
    }
}

export default Hidrogeno;