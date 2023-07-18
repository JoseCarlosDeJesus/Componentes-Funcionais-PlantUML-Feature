import MandatoryFeature from "../pages/feature-generic/Feature";
import Button from "./Button"
import React from "react";

export default class ExampleButton extends React.Component{
       constructor(props){
       	super();
       }
       
       render(){
       	return(
       	<div>
       	<MandatoryFeature component="Button"/>
       	</div>
        )
       }
       
}
