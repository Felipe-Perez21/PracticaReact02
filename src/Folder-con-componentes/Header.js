import React,{Component} from "react";
import '../App.css';
import logo from './imagen1.jpg'

class Header extends Component{
    render(){
        return(
            <div className = "elheader">
               <img className = "logo" src = {logo} alt = "Sin imagen x.x"/>
            </div> 
        );
    }
} 

export default Header;
