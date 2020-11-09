import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Navbar} from "./Navbar.component";
import {NavbarLink} from "./NavbarLink.component";
import {Page} from "./Page.component";
import { ContactForm } from './ContactForm.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactForm,
    Navbar,
    NavbarLink,
    Page
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
