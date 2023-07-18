import React from "react";
import '../pages/css/style.css';

export default class Optional extends React.Component{

  constructor(props){
    super(props);
  }
    
  
  render(){
    return(
    <div className="input-group input-group-lg">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">Fantasma</span>
        </div>
        <input type="text" className="form-control" placeholder="caixa de entrada fantasma" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    )
  }

}

