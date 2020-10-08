import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "<h1>HELLO!!</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-portfolio';

  currentIndex = 1;
  
  pageInfos= 
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

  ChangePage($event)
  {
    alert(this.pageInfos[$event.index].title);
    this.currentIndex = $event.index;
  }
}
