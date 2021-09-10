import React from 'react';
import NavBarButtons from '../navBarButtons/navBarButtons';
import "./navBar.css";

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }
render(){
  

    return(
 
        <div className ="navbar">
            <img className = "logo" src = "https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif" alt="logo" />
            <NavBarButtons text = "Home"/>
            <NavBarButtons text = "Genre"/>
            <NavBarButtons text = "TV Series"/>
            <NavBarButtons text = "About"/>
            
           
    

        </div>
    )
}

}

export default NavBar;