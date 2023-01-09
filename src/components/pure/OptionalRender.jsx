import React, {useState} from 'react'


let red = 0;
let green = 200;
let blue = 150;

//? estilo para usuario  logeado 
const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color:"white",
    fontWeight: "bold"
}
//? estilo para usuario  no logeado 
const unloggedStyle = {
    backgroundColor: "tomato",
    color: "white",
    fontWeight: "bold"
}


//login /Logout buttons
const LoginButton = ({loginAction, propsStyle}) =>{
    return(
        <button style={propsStyle} onClick={loginAction}> Login</button>
    )
}

const LogoutButton = ({logoutAction , propsStyle}) =>{
    return(
        <button style={propsStyle} onClick={logoutAction}> Logout</button>
    )
}


export default function OptionalRender() {

    const [access, setAccess] = useState(false);

    const [nMessages, setNMessages] = useState(0);

    // const upDateAccess = ()=>{
    //     setAccess(!access);
    // }

    const loginAction = ()=>{
        setAccess(true)
    }

    const logoutAction = ()=>{
        setAccess(false)
    }

    //? (expression true) && expresion => se renderiza la expresion
    //? (expression false) && expresion => no se renderiza la expresion

    let OptionalButton;

    //mensajes sin leer
    let addMessages = ()=>{
        setNMessages(nMessages + 1);
    }

    // if (access){
    //     OptionalButton = <button onClick={upDateAccess}> Logout</button>
    // }else{
    //     OptionalButton = <button onClick={upDateAccess}> Login</button>
    // }

    if (access){
        OptionalButton = <LogoutButton propsStyle= {unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        OptionalButton = <LoginButton propsStyle= {loggedStyle} loginAction={loginAction}></LoginButton>
    }


    return (
        <div>
            {/* optional button */}
            {OptionalButton}
            {/* n messages unread */}
            {/* {nMessages > 0 && nMessages === 1  && <p>You have {nMessages} new message...</p>}
            {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
            {nMessages === 0 && <p>There are no new messages</p> } */}
            {/* ternay operator */}
            {access ? (
                <div>
                    {nMessages >0   ? 
                    <p>You have {nMessages} new message{nMessages >1 ? "s" : null}...</p> 
                    : <p>There are no new messages</p>}
                    <button onClick={addMessages}> {nMessages === 0 ? "Add your first message" : "Add message"}</button>
                </div>)
            : null}
            
        </div>
    )
}
