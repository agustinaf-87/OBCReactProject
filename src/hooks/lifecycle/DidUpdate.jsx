/**
 * ejemplo de uso de metodo component didUpdate componente de clase 
 * y uso de hook en componente funional
 */

import React, { Component, useEffect } from 'react'

export  class DidUpdate extends Component {

componentDidUpdate(){
    console.log("comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
  }
    render() {
    return (
    <div>
        <h1>DidUpdate</h1>
    </div>
    )
    }
}



export const DidUpdateHook = () => {
    
    useEffect(() => {
    console.log("")
    
    },);
    //corchetes vacios se ejeucta una vez, sin se ejecuta siempre
    
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}
