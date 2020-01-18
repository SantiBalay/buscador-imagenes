import React, { Component } from 'react';

import Axios from 'axios'
import './css/index.css'

import Buscador from './components/Buscador'
import ListaImagenes from './components/ListaImagenes'

class App extends Component {
  
  state = {  
    termino: '',
    imagenes: [],
    pagina: '',
    cargando: false
  }

  buscarImagenes = (termino) => {
    
    
    this.setState({
      termino,
      pagina: 1

    }, () => {
      this.pegarleApi()
    }
    )


  }

  pegarleApi = async () => {

    const busqueda = this.state.termino
    const pagina = this.state.pagina

    const url = `https://pixabay.com/api/?key=14952104-ef56fedb93a3be47e5cf06558&q=${busqueda}&image_type=photo&pretty=true&per_page=20&page=${pagina}`

    this.setState({
      cargando:true
    })

    await Axios.get(url)
      .then( response => {
        setTimeout( () => {
          this.setState({
            imagenes: response.data.hits,
            cargando:false
          })
        },1000)
      })
  }

  cambiarPagina = (numero) => {
    
    const pagina = Math.max(this.state.pagina + numero,1)

    this.setState({
      pagina

    }, () => {
      this.pegarleApi()
      this.scrollUp()
    }
    )
  }

  scrollUp = () => {
    const header = document.querySelector('.jumbotron')
    header.scrollIntoView('smooth','start')
  }

  render() { 

    const cargando = this.state.cargando
    let resultado

    if(cargando) {
      resultado = <div className="sk-chase margin">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                  </div>
    } else {

      resultado =  <ListaImagenes
                      cambiarPagina = {this.cambiarPagina}
                      imagenes={this.state.imagenes}
                    />
    }

    return ( 
      <div className="app container">
        <div className="jumbotron">
            <p className="lead text-center"> Buscador de Imagenes</p>

            <Buscador
              buscarImagenes={this.buscarImagenes}
            />
        </div>

        <div className="row justify-content-center">
          {resultado}
        </div>
        

      </div>
     );
  }
}
 
export default App;