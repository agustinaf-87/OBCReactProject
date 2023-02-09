import React, { useState } from 'react'
import { getNumbers } from '../../../services/observableService'



export default function ObservableExample() {

    const [number, setNumber] =useState(0);

    const obtainNewNumbers =()=>{

        console.log("subscription to observable")

        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log("New number: ", newNumber);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Something went wrong ${error}`)
                    console.log("error in observable")
                },
                complete(){
                    alert(`finished with; ${number}`)
                    console.log("done with the observable")
                }
            }
        )

    }

    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={obtainNewNumbers}> Obtain number</button>
        </div>
    )
}
