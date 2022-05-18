import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo!!!
        </p>
      </header>
    </div>
  );
}

function PilasConvencionales() {
  return (<h3>Pilas convencionales</h3>)
}

function BateriaLitio() {
  return (<h3>Baterias de Litio</h3>)
}

function ComponenteFuncional() {
  return (<h3> Este es un componente funcional!! </h3>);
}

class Articulo extends Component {
  render() {
    return (
      <div>
        <PilasConvencionales />
        <p>
          A pesar del auge de las energias renovables,
          las pilas convencionales siguen utilizandose a diario.
        </p>
        <BateriaLitio />
        <p>
          Gracias a las nuevas tecnologias que afectan a las baterías,
          la autonomia de los coches electricos está aumentrando a pasos agigantados.
        </p>
      </div>
    )
  }
}

class ComponenteClass extends Component {
  render() {
    return (<h1> Componente de clase </h1>);
  }
}

//export default App;
export default Articulo;
//export default ComponenteFuncional;
//export default ComponenteClass;
