import React from "react";
import '../pages/css/style.css';

export default class Button extends React.Component{

  constructor(props){
    super(props);
  }
    
  
  render(){
    return(
        <div>
            <button className="mt-50 btn btn-success">Meu botão fofinho</button>
        </div>
    )
  }

}

