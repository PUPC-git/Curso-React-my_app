import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const element = (
  <div tabIndex="0">
    <h1 className="cabecera"> ªHola Mundo!</h1>
    <h2 className="subtitulo">Bienvenido a mi aplicación</h2>
  </div>
);
const usuario1 = {
  nombre: 'Pedro',
  apellidos: 'Garcia Lopez'
}

function nombre_completo (usuario) {
  return usuario.nombre + ' ' + usuario.apellido
}

function saludo(usuario) {
  if (usuario) {
    return (<h1>Hola,{nombre_completo(usuario)}</h1>);
  } else {
    return (<h1>Hola desconocido</h1>);
  }
}

const elemento = (
  <h1> Hola, {nombre_completo(usuario1)}</h1>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
