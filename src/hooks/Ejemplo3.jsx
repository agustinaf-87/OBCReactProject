/**
 * ejemplo hooks de :
 * -useState()
 * -useContext()
 */


import React, {useState, useContext} from 'react';

/**
 * 
 * @returns componente 1
 * dispone de un contexto que va tener un valor 
 * que recibe desde el padre
 */
const miContexto = React.createContext(null);


const Componente1 = () => {
    //inicializamos un estado vacio que va a rellenarse 
    //con los datos del contexto del padre (transmitir insformacion sin necesidad de eventos ni props)

    const state = useContext(miContexto);     
    
    return (
        <div>
            <h1>
                el token es: {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
};





const Componente2 = () => {
    
    const state = useContext(miContexto); 

    return (
        <div>
            <h2>
                la Sesión es: {state.sesion}
            </h2>
        </div>
    );
};




export default function MiComponenteConContexto(){
    
    const estadoInicial ={
        token:"1234567",
        sesion: 1
    }

    //creamos el estado de este componente
    const [sesionData, setsesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setsesionData(
            {
                token:"jwt123456789",
                sesion: sesionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sesionData}>
        {/*Todo lo que esta aca dentro puede leer los datos de sesion data */}
        {/*ademas si se actualizan los componente de aqui tb se actualiza */}
        <h1>
            ***Ejemplo de useState() y useContext()***
        </h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    );
};






