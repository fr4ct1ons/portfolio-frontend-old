import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Navbar from "./Navbar";
import Page from "./Page";
import { render } from 'react-dom';
import ContactForm from "./ContactForm"


class App extends React.Component{
  

constructor(props)
{
  super(props);

  this.state = 
  {
    currentIndex: 1,

    pageInfos:
    [
      {
        title: "ART GALLERY", subtitle: "My works of art"
      },
      {
        title: "WHO AM I", subtitle: "Introducing who I am, what I work with and my goals"
      },
      {
        title: "GAMES", subtitle: "Games I worked on"
      },
      {
        title: "SOFTWARE", subtitle: "Software I worked on"
      }
    ]
  };

  this.ShowPageInfo = this.ShowPageInfo.bind(this);
}

ShowPageInfo(index)
{
  
  this.setState({
    currentIndex: index
  });
}

render()
{
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar pageChangeMethod={this.ShowPageInfo}/>

        <Switch>
          <Route exact path="/">
            <Page title = "WHO AM I" subtitle = "Introducing who I am, what I work with and my goals"></Page>
            <p>Hey there! My name is Gabriel Lucena, also known as FR4CT1ONS.</p>
            <p>I am an aspiring game programmer, artist and designer. Currently, I'm graduating in Information Technology at Universidade Federal do Rio Grande do Norte. 
                Over there, I'm primarily studying game development and design along with software engineering. I am also studying arts as an auto-didact. 
                After I graduate in I.T., I plan to stock up on money for taking a bachelor's degree course in arts/game arts.</p>
            <p>I have already worked on multiple games with two W.I.P small projects already published on GameJolt and itch.io - Poço Frio and Single Fighter - and am developing a personal project more privately.</p>
            <p>I have experience with C/C++, C# and with the Unity game engine. Currently, I'm studying the Unreal engine.</p>
            <p>When it comes to arts, I have experience in 2D concept and final art, as well as 3D modelling in general. Currently, I'm studying animation.</p>
            <br/>
            <p>Right now, the public project I'm giving most of my attention to is Single Fighter. Go check it out! <a href="https://fr4ct1ons.itch.io/single-fighter">https://fr4ct1ons.itch.io/single-fighter</a></p>
          </Route>
          <Route exact path="/games">
            <Page title = "GAMES" subtitle = "Games I worked on"></Page>
          </Route>
          <Route exact path="/art">
            <Page title = "ART" subtitle = "Art pieces I made"></Page>
          </Route>
          <Route exact path="/software">
            <Page title = "SOFTWARE" subtitle = "Software I develped"></Page>
          </Route>
        </Switch>
          
        <ContactForm></ContactForm>
      </BrowserRouter>

    </div>
  );
}
}

export default App;
