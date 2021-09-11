import React from "react";
import "./sideBarButtons.css";
class SideBarButtons extends React.Component{

    constructor(props){
        super(props);
        this.state = {}; 
    }

    render(){
        return(
            <div className = "sidebar-button" id={this.props.genre === this.props.text ? "selected" : ""} onClick={()=> {
                let value = this.props.text;
                this.props.changeGenre(value);
            }}>{this.props.text}</div>
        )
    }
}
export default SideBarButtons;