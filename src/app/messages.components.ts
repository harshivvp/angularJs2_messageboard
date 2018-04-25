import { Component } from "@angular/core";
import { NgForOf } from "@angular/common";

@Component({
    selector: "messages",
    template: `
    <h1>This is the message component!</h1>
    <div *ngFor='let message of messages'>
        {{ message.owner }} says :- {{ message.text }}
    </div>
    <button>Basic</button>
    `
})

export class MessagesComponent {    
    messages = [{text:"Hello Kiddo!", owner:"Kunal"},{text:"Nah. Bye!", owner:"Nilesh"}];

}
 