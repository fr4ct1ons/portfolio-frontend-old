import React from 'react';
import logo from './Logo final.svg';
//import './App.css';
import './cascades/Navbar.css';
import NavbarLink from "./NavbarLink";
import LinkType from "./NavbarLink";

class Navbar extends React.Component{

render(){
return(
    <div className="Navbar">
        <ul className="Links">
            <a href = "fr4ct1ons.myportfolio.com"> <img src = {logo} className = "Logo"/></a>
            
            <NavbarLink name="ART GALLERY" linkType={2} pageLink = "https://fr4ct1ons.myportfolio.com/work"></NavbarLink>
            <NavbarLink name="WHO AM I" linkType={1} pageLink = "#"></NavbarLink>
            <NavbarLink name="GAMES" linkType={2} pageLink = "https://fr4ct1ons.myportfolio.com/full-gallery"></NavbarLink>
            <NavbarLink name="SOFTWARE" linkType={2} pageLink = "https://fr4ct1ons.myportfolio.com/software"></NavbarLink>

        </ul>
    </div>
)
}

}

export default Navbar