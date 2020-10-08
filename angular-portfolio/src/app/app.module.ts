import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Navbar} from "./Navbar.component";
import {NavbarLink} from "./NavbarLink.component";
import {Page} from "./Page.component";

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    NavbarLink,
    Page
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
