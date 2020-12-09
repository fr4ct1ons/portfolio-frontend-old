import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Navbar from "./Navbar";
import Page from "./Page";
import { render } from 'react-dom';
import ContactForm from "./ContactForm";
import GalleryEntry from "./GalleryEntry";

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
            <GalleryEntry title="Single Fighter" 
            img="https://raw.githubusercontent.com/lucena-fr4ct1ons/lucena-fr4ct1ons.github.io/master/games/games-assets/Single%20Fighter%20title.png"
            url="https://fr4ct1ons.itch.io/single-fighter"></GalleryEntry>
            <GalleryEntry title="Single Fighter2" 
            img="https://raw.githubusercontent.com/lucena-fr4ct1ons/lucena-fr4ct1ons.github.io/master/games/games-assets/Single%20Fighter%20title.png"
            url="https://fr4ct1ons.itch.io/single-fighter"></GalleryEntry>
            <GalleryEntry title="Single Fighter3" 
            img="https://raw.githubusercontent.com/lucena-fr4ct1ons/lucena-fr4ct1ons.github.io/master/games/games-assets/Single%20Fighter%20title.png"
            url="https://fr4ct1ons.itch.io/single-fighter"></GalleryEntry>
            <GalleryEntry title="Single Fighter444" 
            img="https://raw.githubusercontent.com/lucena-fr4ct1ons/lucena-fr4ct1ons.github.io/master/games/games-assets/Single%20Fighter%20title.png"
            url="https://fr4ct1ons.itch.io/single-fighter"></GalleryEntry>
            <GalleryEntry title="Single Fighter444" 
            img="https://raw.githubusercontent.com/lucena-fr4ct1ons/lucena-fr4ct1ons.github.io/master/games/games-assets/Single%20Fighter%20title.png"
            url="https://fr4ct1ons.itch.io/single-fighter"></GalleryEntry>
          </Route>
          <Route exact path="/art">
            <Page title = "ART" subtitle = "Art pieces I made"></Page>
            <GalleryEntry title="Workbench" 
            img="https://pro2-bar-s3-cdn-cf6.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/72bce5f9-2596-4820-b1b7-dd2a0bd7d964.jpg?h=9446e874cc19b1da82695f7fc0dc722c"
            url="https://fr4ct1ons.myportfolio.com/inktober-2019"></GalleryEntry>
            <GalleryEntry title="Unreal water shader"
            img="https://pro2-bar-s3-cdn-cf5.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/6f71a0c5-8cc3-4d7d-9b74-bf2a0bcc2a8d.png?h=f74f57784e5d1808d20b4f08dbc531de"
            url="https://fr4ct1ons.myportfolio.com/stylized-unreal-ocean-water-shader"></GalleryEntry>

          </Route>
          <Route exact path="/software">
            <Page title = "SOFTWARE" subtitle = "Software I developed"></Page>
            <GalleryEntry title="Unity Cel-Shaded Render Pipeline"
            img="https://pro2-bar-s3-cdn-cf3.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/485ffae0-7448-4fd9-915a-61f7192ede9f.png?h=2be02d12d0958faae66818c150bba371"
            url="https://fr4ct1ons.myportfolio.com/cel-shaded-render-pipeline"></GalleryEntry>
          </Route>
        </Switch>
          
        <ContactForm></ContactForm>
      </BrowserRouter>

    </div>
  );
}
}

export default App;
