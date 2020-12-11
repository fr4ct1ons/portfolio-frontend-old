import React from 'react';
//import './App.css';
import '../styles/NavbarLink.css';
import {Link} from 'gatsby';

class NavbarLink extends React.Component{

render(){

    //alert(this.props.linkType)
    let newColor = "white";
    switch(this.props.linkType)
    {
        case 1:
            newColor = "rgb(255, 0, 0)";
            break;
        case 2:
            newColor = "rgb(220,85,220)";
            break;
        case 3:
            newColor = "rgb(225,220,80)";
            break;
    }


    return(
        <li><Link to={this.props.route} /*onClick={() => this.props.ChangePage(this.props.index)}*/ style={{color : newColor}}>{this.props.name}</Link></li>
    )
}
}

export default NavbarLink

const LinkType = {
    CURRENT: "current",
    PAGE: "page",
    GALLERY: "gallery"
}