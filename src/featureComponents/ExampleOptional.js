import React from "react";
import myControlVariable from "../rules/myControlVariable";
import OptionalFeature from "../pages/feature-generic/OptionalFeature";

export default class  ExampleOptional extends React.Component{
    constructor(props){
     super();
    }

    render(){
     return(
     <div>
     <OptionalFeature component = "Optional" rules={() => myControlVariable()}/>
     </div>
     )
    }

    }