
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Noticia extends Component{
    render(){
        const noticia = this.props.data;
        return(
            <div>
                <img alt="foto" src={noticia.corte_url} className="img-fluid"></img>
                <Link to={{ pathname: '/desarrollo', state: {theNoticia: noticia}}}><h5>{noticia.title}</h5></Link>
                <p className="summary">{noticia.summary}</p>
            </div>
        )
    }
}


export default Noticia;