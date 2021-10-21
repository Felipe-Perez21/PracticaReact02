//import {Button} from 'bootstrap';
import React,{Component} from 'react'
import './App.css';
import Header from './Folder-con-componentes/Header';
import Productos from './Folder-con-componentes/Productos';
import Listado from './Folder-con-componentes/Listado';

class App extends Component{
  constructor(){ // Se va a iniciar el state mediante un contructor 
    super();

    this.state = { 
      // Valores iniciales del state 
      carrito:[],
      total:0,
      productosLista:[
      {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899, url:'https://m.media-amazon.com/images/I/61zKGsIdoPL._AC_SY355_.jpg'},
      {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999, url:'https://cdn-files.kimovil.com/phone_front/0002/92/thumb_191056_phone_front_big.jpeg'},
      {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850, url:'https://http2.mlstatic.com/D_NQ_NP_926246-MLA44282592285_122020-O.jpg'},
      {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949, url:'https://m.media-amazon.com/images/I/61ShPQu-u0L._AC_SX522_.jpg'},
      {codigo:5,descripcion:"Mochila Xiaomi", precio:699, url:'https://m.media-amazon.com/images/I/51wu2dpWapL._AC_SX569_.jpg'},
      {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999, url:'https://www.primusgaming.com/media/PKS-301_620.jpg'},
      ]

    };
  }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
// Aqui viven las funciones 
  
  agregar=(_x)=>{
    const buscado = this.state.carrito.find(a=>a.codigo===_x.codigo); 
    
    let temporal_carrito=this.state.carrito; // Aqui viene el carrito asi de una
    
    var objtemporal;

    if(buscado!==undefined)
    {
      let temporal_importe = buscado.importe;

      objtemporal={ // Objeto temporal
          cantidad:buscado.cantidad+1,
          codigo:_x.codigo,
          descripcion:_x.descripcion,
          precio:_x.precio,
          importe:temporal_importe+_x.precio
        }
        temporal_carrito=this.state.carrito.filter(a=>a.codigo!==_x.codigo) // Remover repetidos en el carrito   
    }
    else
    {
      objtemporal={ // Objeto temporal 
        cantidad:1,
        codigo:_x.codigo,
        descripcion:_x.descripcion,
        precio:_x.precio,
        importe:_x.precio
      }
    }

    this.setState({
      carrito:[...temporal_carrito,objtemporal],
      total:this.state.total+_x.precio
    })

  }


  eliminar=(_x)=>{
    const buscado = this.state.carrito.find(a=>a.codigo===_x.codigo); 
    
    let temporal_carrito=this.state.carrito; // Aqui viene el carrito asi de una
    
    var objtemporal;

    if(buscado.cantidad>1)
    {
      let temporal_importe = buscado.importe;

      objtemporal={ // Objeto temporal
          cantidad:buscado.cantidad-1,
          codigo:_x.codigo,
          descripcion:_x.descripcion,
          precio:_x.precio,
          importe:temporal_importe-_x.precio
        }
        temporal_carrito=this.state.carrito.filter(a=>a.codigo!==_x.codigo) // Remover repetidos en el carrito   
        
        this.setState({
          carrito:[...temporal_carrito,objtemporal],
          total:this.state.total-_x.precio
        })
    }
    else{
      temporal_carrito=this.state.carrito.filter(a=>a.cantidad!==_x.cantidad)
      console.log(temporal_carrito)
      this.setState({
        total:this.state.total-_x.precio,
        carrito:[...temporal_carrito]
      })
    }  
  }

  eliminarCarrito=()=>{
    this.setState({
      total:0,
      carrito: []
    })
  }

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Aqui viven los problemas 
  render(){
    return(
      <div>
        <Header/>

       <div className = "losproductos">
        <Productos 
        productosLista={this.state.productosLista} 
        agregar = {this.agregar}
        />

        <Listado
        carrito = {this.state.carrito}
        total = {this.state.total}
        eliminar = {this.eliminar}
        eliminarCarrito = {this.eliminarCarrito}
        />
        </div>

      </div>
    );
  }
}

export default App;
