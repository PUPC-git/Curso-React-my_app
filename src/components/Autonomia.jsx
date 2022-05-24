import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componente stateful o de clase
class Autonomia extends Component {
    constructor(props) {
        super(props);
        this.state = {encendido: true};

        //evento con un metodo controlador
        this.manejarPulsacion = this.manejarPulsacion.bind(this);
    }

    manejarPulsacion(event) {
        this.setState((prevState, props) => ({
            encendido: !prevState.encendido
        }));
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Autonomia: {this.props.km} km </li>
                </ul>
                <button onClick={this.manejarPulsacion}>
                    {this.state.encendido ? 'Activado' : 'Desactivado'}
                </button>
            </div>
        )
    }
}

//añadimos un prototipo number y obligatorio
Autonomia.propTypes = {
    km: PropTypes.number.isRequired
}

export default Autonomia;