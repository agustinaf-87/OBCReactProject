/**
 * ejemplo de componente de tipo clase
 * que dispone de los metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCicleExample extends Component {
    constructor(props) {
        super(props);
        console.log("constructor: cuando se instancia el componente")
    }

    componentWillMount() {
        console.log("willmount: antes del montaje del componente")
    }

    componentDidMount() {
        console.log("didmount: justo al acabar el montaje del componente andes de renderizarlo")
    }

    componentWillReceiveProps(nextProps) {
        console.log("willReceiveProps: si va a recibir nuevas props")
    }

    shouldComponentUpdate(nextProps, nextState) {
        //sirve para controlar si el componente debe o no actualizarse
        //return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("willUpdate: justo antes de actualizarse")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("didUpdate: justo despues de actualizarse")
    }

    componentWillUnmount() {
        console.log("willUnmount: justo antes de desaparecer")
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCicleExample.propTypes = {

};

export default lifeCicleExample;