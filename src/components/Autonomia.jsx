import React, { Component } from 'react';

//Componente stateful o de clase
class Autonomia extends Component {
    render() {
        return (
            <ul>
                <li>Autonomia: {this.props.km} </li>
            </ul>
        )
    }
}

export default Autonomia;