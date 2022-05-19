import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componente stateful o de clase
class Autonomia extends Component {
    render() {
        return (
            <ul>
                <li>Autonomia: {this.props.km} km </li>
            </ul>
        )
    }
}

//añadimos un prototipo number y obligatorio
Autonomia.propTypes = {
    km: PropTypes.number.isRequired
}

export default Autonomia;