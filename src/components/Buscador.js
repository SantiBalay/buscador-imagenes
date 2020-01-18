import React, { Component } from 'react';

class Buscador extends Component {

    refBusqueda = React.createRef()

    enviarForm = (e) => {
        e.preventDefault()

        const busqueda = this.refBusqueda.current.value

        this.props.buscarImagenes(busqueda)

        e.currentTarget.reset()

    }


    render() { 
        return ( 
            <form onSubmit={this.enviarForm}>
                <div className="row">
                    <div className="form-group col-md-8 col-sm-8">
                        <input ref={this.refBusqueda} type="text" placeholder="Ingresa tu busqueda" className="form-control form-control-lg"/>
                    </div>

                    <div className="form-group col-md-4 col-sm-4">
                        <input type="submit" value="Buscar" className="btn btn-lg btn-danger btn-block"/>
                    </div>
                    
                </div>
            </form>
         );
    }
}
 
export default Buscador;