import React, { Component } from 'react';
import axios from 'axios';
import Noticia from './Noticia';
class Main extends Component{
    constructor(){
        super();
        this.state = {
          noticias: []
        }
        this.fetchData();
      }

      componentDidMount(){
        let data = localStorage.getItem('data');
        if(data !== null){
          this.setData(JSON.parse(data));
        }
      }
    
      fetchData(){
        axios.get('https://sirio.io/consulta.php')
          .then(response => {
            console.log('server response');
            console.log(typeof response.data);
            this.setData(JSON.parse(response.data));
          });
    
      }
      setData(data){
        let noticias = data[2]['items'];
        noticias = noticias.concat(data[5]['items']);
        noticias = noticias.concat(data[8]['items']);
        noticias = noticias.concat(data[10]['items']);
        localStorage.setItem('data',JSON.stringify(data));
        this.setState({
          noticias: noticias
        });
      }

      render() {
        console.log(this.state.noticias);
        const noticias = this.state.noticias;
        return (
          <div className="app">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="logo">
                <img alt="logo" src={"http://www.abc.com.py/plantillas/img/abc-logo.png?0.201808241535"}></img>
              </div>
              {noticias.map(item => <Noticia key={item.articulo} data={item}></Noticia>)}
            </div>
            <div className="col-md-2"></div>
            </div>
          </div>
        );
      }
}

export default Main;