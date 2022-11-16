/**
 * ejemplo de uso de metodo componentWillUnMount para clase y 
 * ejemplo de uso de hooks para componente funcional
 *cuando el componente va a desaparece
 */

 import React, { Component, useEffect } from 'react'
 
 export class WillUnMount extends Component {
  
    componentWillUnmount(){
        console.log("comportamiento antes de que el componentedesaparezca")
    }
    render() {
    return (
    <div>
        <h1>
        WillUnMount
        </h1>
    </div>
     )
   }
 }


export const WillUnMountHook = () => {
    
    useEffect(() => {
        // aqui no ponemos nada 
        return () => {
            console.log("comportamiento antes de que el componentedesaparezca")
        };
    }, []);

    return (
        <div>
            <h1>
                WillUnMount
            </h1>
        </div>
    );
}


