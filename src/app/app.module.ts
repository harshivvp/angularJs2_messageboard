import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.components';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent, MessagesComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
