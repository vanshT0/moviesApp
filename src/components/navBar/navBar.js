import React from 'react';
import About from '../about/about';
import NavBarButtons from '../navBarButtons/navBarButtons';
import "./navBar.css";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import { Link } from 'react-router-dom';


class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }
render(){
  

    return(
 
        <>

         <div className ="navbar">
            <img className = "logo" src = "https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif" alt="logo" />
            <NavBarButtons text = "Movies"/>
            <NavBarButtons text = "TV Series"/>
            <NavBarButtons text = "Anime"/>
            <NavBarButtons text = "About"  onClick={()=> {
                <Redirect to = {About}></Redirect>
            }}/>

           
    
        </div> 
</>
       

    )
}

}

export default NavBar;