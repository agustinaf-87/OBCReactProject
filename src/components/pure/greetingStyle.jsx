import React, {useState} from 'react';
//definiendo estilos en constantes

const loggedStyle = {
    color:"white"
}

const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold"
}


const GreetingStyle = (props) => {

    const [logged, setLogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
        {logged ? 
            <p>Hola, {props.name}</p>
            : 
            <p> Please, login </p> }
            
            <button onClick={()=>{
                console.log("boton pulsado");
                setLogged(!logged);
            }}>
                { logged ? "Logout" : "Login" }
            </button>
        </div>
    );
}

export default GreetingStyle;
