import React from 'react';
import "./loader.css";

class Loader extends React.Component{

constructor(props){
    super(props);
    this.state = {}
}

render(){
    return(
        <div className ="loader">
            <img src ="https://media2.giphy.com/media/8lKyuiFprZaj2lC3WN/giphy.gif" alt ="loader"  />
        </div>
    )
}

}
export default Loader;