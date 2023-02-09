import React from 'react'

export default function AsyncExample() {

    async function generateNumber() {
        return 1;
    }

    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Reponse: ${response}`))
            .catch((error) => alert(`Something went wrong ${error}`));
    }

    //primero ejecuta la funcion de generate number
    //una vez q se genera el numero se va ejecuutar la funcion de obtain number
    //asi evitamos q se ejecute esta ultima sin primero tener el valor del numero

    //.then para demostrar q hacemos cuando se resuelte la promesa
    //.catch para mostrar el error

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Reponse: ${response}`))
            .catch((error) => alert(`Something went wrong ${error}`));
    }

    //en este caso estamos trabajando con una promesa
    //hasta q una promesa no se recuelve no tenemos el valor final del dato


    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage (){
        saveSessionStorage("name", "agustina")
        .then((response) => {
            let value = response;
            alert(`Saved name: ${value}`);
        }).catch((error)=> {
            alert(`Something went wrong ${error}`)
        }).finally(()=> {
            alert("SUCCSESS: Name save and retreived ")
        })
    }


    async function obtainMessage (){
        let promise = new Promise((resolve, reject)=>{

            setTimeout(()=> resolve ("Hello World"), 2000)
        });

        let message = await promise;

        await alert(`Message recieve ${message}`)
    }

    const returnError = async()=>{
        await Promise.reject(new Error("Oooops!"))
    }

    const consemeError =()=>{
        returnError()
            .then((response)=>alert(`Everything is OK: ${response}`))
            .catch((error) => alert(`Something went wrong ${error}`))
            .finally(()=>alert("Finally executed"))
    }

    const urlNotFound = async()=>{

        try {
            let response = await fetch("https://invalidURL.com");
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL ${error} (check your console )`)
        }
    }

    const multiplePromises = async()=>{
        let results = await Promise.all(
            [
                fetch("https://reqres.in/api/users"),
                fetch("https://reqres.in/api/users?oage=2")
            ]
        ).catch((error)=> alert(`Something went wrong with your URL ${error} (check your console )`))
    }

    return (
        <div>
            <h1>Async, Promise Examples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showStorage}>Save Name and Show</button>
            <button onClick={obtainMessage}>Recieve Message in 2 seconds </button>
            <button onClick={consemeError}> Obtain Error </button>
            <button onClick={urlNotFound}>Request to unkwon URL</button>
            <button onClick={multiplePromises}>Multiple Promises</button>
        </div>
    )
}

