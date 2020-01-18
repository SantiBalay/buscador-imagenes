import React, { Component, Fragment } from 'react';

import Imagen from './Imagen'
import Navegacion from './Navegacion';

class ListaImagenes extends Component {

    mostrarImagenes = () => {

        const imagenes = this.props.imagenes
        
        if(imagenes.length === 0) {
            return null
        }

        return(
            
            <Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map( img => (
                        <Imagen 
                            key= {img.id}
                            data = {img}
                        />
                    ))}
                </div>

                <Navegacion
                    cambiarPagina = {this.props.cambiarPagina}
                />

            </Fragment>
        )
    }

    render() { 
        return ( 
            <Fragment>
                { this.mostrarImagenes() }
            </Fragment>
         );
    }
}
 
export default ListaImagenes;