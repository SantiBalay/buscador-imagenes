import React, { Component } from 'react';

class Navegacion extends Component {

    cambiarAnterior = () => {
        console.log("Aprete anterior")
        this.props.cambiarPagina(-1)
    }

    cambiarSiguiente = () => {
       this.props.cambiarPagina(1)
    }

    render() { 
        return ( 
            <div className="row py-5 justify-content-end">
            <button onClick={this.cambiarAnterior} type="button" className="btn btn-info mr-1"> &larr; Anterior  </button>
            <button onClick={this.cambiarSiguiente} type="button" className="btn btn-info "> Siguiente &rarr; </button>
        </div>
         );
    }
}

export default Navegacion
 
