/**
 * ejemplo de uso de:
 * -useState()
 * -useRef() identificar elementos dentro de la vista
 * -useEffect() controla los cambios en la vista, ciclo de vida componente
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    //vamos a crear dos contadores distintos cada uno en un estado diferente
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);
    
    //vamos a crear una referencia con useRef
    //para asociar una variable con un elemento del DOM (vista html)
    const miRef = useRef();
    
    function incrementar1(){
        setcontador1(contador1 +1);
    }

    function incrementar2(){
        setcontador2(contador2 +1);
    }

    /**trabajando con el useEffect */

    /**
     * ? Caso 1: Ejecutar siempre un snipet de codigo
     * cada vez que haya un cambio en el estado del componente 
     * se ejecuta aquello que esta dentro del useEffect
     */

    // useEffect(() => {
    //    console.log("cambio en el estado del componente");
    //    console.log("mostrando referencia a elemento del DOM");
    //    console.log(miRef); 
    // })

    /**
     * ? caso 2: Ejecutar solo cuando se cambie el contador1
     */

    // useEffect(() => {
    //     console.log("cambio en el estado del contador1");
    //     console.log("mostrando referencia a elemento del DOM");
    //     console.log(miRef); 
        
    // }, [contador1]);

    /**
     * ? caso 2: Ejecutar solo cuando se cambie el contador1 o contador 2
     */

     useEffect(() => {
            console.log("cambio en el estado del contador1 o contador 2");
            console.log("mostrando referencia a elemento del DOM");
            console.log(miRef); 
            
        }, [contador1, contador2]);


    return (
        <div>
            <h1>
                ***Ejemplo de useState (), useRef(), useEffect() ***
            </h1>
            <h2>
                CONTADOR 1: {contador1}
            </h2>
            <h2>
                CONTADOR 2: {contador2}
            </h2>
            {/**elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/*botones para cambiar contadores*/}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
