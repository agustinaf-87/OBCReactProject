/*ejemplo de uso del hook useState

Crear un componente de tipo funcion y acceder a su estado privado 
a traves de un hook y ademas poder modificarlo

*/ 

import React, {useState} from 'react';


const Ejemplo1 = () => {
    //valor inicial para un contador

    const valorInicial = 0;

    //valor inicial para una persona

    const personaInicial = {
        nombre: "agustina",
        email: "agustina@gmail.com"
    }

    /*queremos que el valor inicial y persona inicial sean parte del estado del componente 
    para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente
    
    estructura: cont [nombre variable, funcionparacambiar] = useState (valor inicial)*/

    const [contador, setcontador] = useState(valorInicial);

    const [persona, setpersona] = useState(personaInicial);

    /*Funcion para actualizar el estado privado que contiene el contador */
    
    function incrementarContador (){
        //funcion para cambiar (nuevo valor)
        setcontador(contador +1);
    }
    /*funcion para actualizar el estado de persona en el componente */
    
    function actualizarPersona(){
        setpersona({
            nombre:"pepe",
            email: "pepe@gmail.com"
        })
    }

    return (
        <div>
            <h1>
                ***Ejemplo de useState () ***
            </h1>
            <h2>
                CONTADOR: {contador}
            </h2>
            <h2>
                DATOS DE LA PERSONA: 
            </h2>
            <h3>
                NOMBRE: {persona.nombre}
            </h3>
            <h4>
                EMAIL: {persona.email}
            </h4>
            {/*bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
};




export default Ejemplo1;
