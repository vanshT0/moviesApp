import React from 'react';
import SideBarButtons from '../sideBarButtons/sideBarButtons';
import "./sideBar.css"

class SideBar extends React.Component{
    
    constructor(props){
     
        super(props);
        this.state = {};
    }
    
    

    render() {

        
        return (
           <div className = "sidebar">
              <SideBarButtons text = "All Genre"/>
              <SideBarButtons text = "Action "/>
              <SideBarButtons text = "Thriller "/>
              <SideBarButtons text = "Sci-Fi"/>
              <SideBarButtons text = "Horror"/>

           </div>
           
        )
    }
}

export default SideBar;