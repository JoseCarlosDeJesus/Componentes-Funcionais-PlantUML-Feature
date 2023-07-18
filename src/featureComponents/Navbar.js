import React from "react";
import AlternativeFeature from "../pages/feature-generic/AlternativeFeature";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import { navbarDesktopRule, navbarMobileRule } from "../rules/rules";
import genericRule from "../rules/genericRule";

export default class Navbar extends React.Component{
       constructor(props){
       	super(props);
       }
       
       render(){
       	return(
       	<div>
              <AlternativeFeature components={[{component: "NavbarMobile", rule: navbarMobileRule}, {component : "NavbarDesktop", rule: navbarDesktopRule}]}  rule={genericRule}  />        
       	</div>
        )
       }
       
       }
