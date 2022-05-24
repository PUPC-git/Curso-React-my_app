import React, { useState, useEffect, useRef } from "react";

const nombreRef = React.createRef();
const apellidoRef = React.createRef();


//Ejemplo de uso de referencias en React
function Formulario() {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [resultado, setResultado] = useState('');

    //definicion de variables para el uso de referencias
    const nombreRef = React.createRef();
    const apellidoRef = React.createRef();
    const [resultado2, setResultado2] = useState('');

    //creacion de contador por ciclo de vida
    const [contador, setContador] = useState(0);
    //creacion de contador por referencias a modo de estados
    const contador2 = useRef(0);
    
    const manejarPulsacion = (event) => {
        setResultado(`${nombre} ${apellidos}`);
        //para generar un valor ramdom por cada pulsacion y probar que el contador
        //por referencia no esta generando ningun bucle
        //setResultado(Math.random() + "");
    }

    const manejarPulsacion2 = (event) => {
        setResultado2(`${nombreRef.current.value} ${apellidoRef.current.value}`);
    }

    
    useEffect(() => {
        //uso del ciclo de vida para actualizar el contador, genera un bucle infinito
        //setContador(ultimoValor => ultimoValor + 1);

        //uso del contador por referencia, se actualiza cada vez que hay cambios en el formulario
        //tras pulsar en el boton de mostrar datos
        contador2.current = contador2.current + 1;
    });

    return (
        <div>                     
            <h1>Formulario en React</h1><br/>

            <table>
                <tr>
                    <td>
                        <label type="text">Nombre: </label>
                    </td>
                    <td>
                        <input placeholder="Introduce el nombre"
                        onChange={(e) => {setNombre(e.target.value)}}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label type="text">Apellidos: </label>
                    </td>
                    <td>
                        <input placeholder="Introduce tus apellidos"
                        onChange={(e) => {setApellidos(e.target.value)}}></input>
                    </td>
                </tr>
            </table>
            <p/>
            <button onClick={manejarPulsacion}>Mostrar datos</button><p/>
            <strong>{resultado}</strong>

            <h1>Formulario en React por referencias</h1><br/>

            <table>
                <tr>
                    <td>
                        <label type="text">Nombre: </label>
                    </td>
                    <td>
                        <input placeholder="Introduce tu nombre" ref={nombreRef}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label type="text">Apellidos: </label>
                    </td>
                    <td>
                        <input placeholder="Introduce tus apellidos" ref={apellidoRef}></input>
                    </td>
                </tr>
            </table>            
            <p/>
            <button onClick={manejarPulsacion2}>Mostrar datos</button><p/>
            <strong>{resultado2}</strong>
            <div>
                El componente se ha renderizado: {contador}
            </div>
            <div>
                El componente se ha renderizado: {contador2.current}
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default Formulario;