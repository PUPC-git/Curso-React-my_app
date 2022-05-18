import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ComponenteClass from './App';
import ComponenteFuncional from './App';
import reportWebVitals from './reportWebVitals';

const usuario1 = {
  nombre: 'Pedro',
  apellidos: 'Garcia Lopez'
}
const elemento = (
  <h1> Hola, {nombre_completo(usuario1)}</h1>
);
const element = (
  <div tabIndex="0">
    <h1 className="cabecera"> ¡Hola Mundo!</h1>
    <h2 className="subtitulo">Bienvenido a mi aplicación</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));

function nombre_completo (usuario) {
  return usuario.nombre + ' ' + usuario.apellidos
}

function saludo(usuario) {
  if (usuario) {
    return (<h1>Hola, {nombre_completo(usuario)}</h1>);
  } else {
    return (<h1>Hola desconocido</h1>);
  }
}

function Saludo2(usuario) {   
  return (<h1>Hola, {nombre_completo(usuario)}</h1>);
}

/* Render por defecto
root.render( 
  //llamada a funcion Saludo2 que muestra el nombre de usuario mediante los parametros
  //<Saludo2 nombre="Tomas1" apellidos="Garcia"></Saludo2>
  
  <React.StrictMode>
    <App />
  </React.StrictMode>  
);
*/
/*  Componente de clase
root.render(
  <ComponenteClass />
);
*/
// Componente funcional
root.render(
  <ComponenteFuncional />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
