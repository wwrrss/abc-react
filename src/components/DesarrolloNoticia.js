import React, { Component } from 'react';
class DesarrolloNoticia extends Component{

    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        const noticia = this.props['location']['state']['theNoticia'];
        return(
            <div className="desarrollo-noticia">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <h4>{noticia.title}</h4>
                        <img alt="foto" src={noticia.corte_url} className="img-fluid"></img>
                        <p dangerouslySetInnerHTML={{__html: noticia.body}}></p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
}
export default DesarrolloNoticia;