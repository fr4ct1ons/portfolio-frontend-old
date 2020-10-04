import React from 'react';
import logo from './Logo final.svg';
//import './App.css';
import './cascades/Navbar.css';

class Navbar extends React.Component{

render(){
return(
    <div className="Navbar">
        <ul className="Links">
            <a href = "fr4ct1ons.myportfolio.com"> <img src = {logo} className = "Logo"/></a>
            <li><a href="#">Test2</a></li>
            <li><a href="#">Test1</a></li>
        </ul>
    </div>
)
}

}

export default Navbar