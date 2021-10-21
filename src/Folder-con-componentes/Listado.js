import React,{Component} from "react";
import '../App.css'
import logocarro from '../102661.png'

class Listado extends Component{
    render(){
        return(
            <div>
                <p>*** Listado *** </p>
                
                {
                    this.props.carrito.length===0
                    ?
                    <p>No ha agarrado productos mi güer@ :/</p>
                    :
                    <div>
                        <p>Total = ${this.props.total}</p>
                        <button><img src={logocarro} alt="my image" className="imgt" onClick={()=>this.props.eliminarCarrito()}/></button>
                        <table className="tt">
                            <thead>
                                <tr>
                                <th>Cantidad</th>
                                <th>Codigo</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Importe</th>
                                <th>--</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                this.props.carrito.map((prdt,index)=>
                                <tr key = {index}>
                                    <td>{prdt.cantidad}</td>
                                    <td>{prdt.codigo}</td>
                                    <td>{prdt.descripcion}</td>
                                    <td>${prdt.precio}</td>
                                    <td>{prdt.importe}</td>
                                    <td><button onClick={()=>this.props.eliminar(prdt)}>Eliminar (-)</button></td> 
                                </tr>
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}

export default Listado;