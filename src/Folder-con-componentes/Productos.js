import React,{Component} from "react";
import '../App.css'

class Productos extends Component{
    render(){
        return(
            <div>
                <p>*** Productos ***</p>

                <table className="tt">
                    <thead>
                        <tr>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th>--</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        this.props.productosLista.map((prdt,index)=>
                        <tr key = {index}>
                            <td>{prdt.codigo}</td>
                            <td>{prdt.descripcion}</td>
                            <td><img src={prdt.url} className="imgt" alt="No img"/></td>
                            <td>${prdt.precio}</td>
                            <td><button onClick={()=>this.props.agregar(prdt)}>Agregar (+)</button></td> 
                        </tr>
                        )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Productos;