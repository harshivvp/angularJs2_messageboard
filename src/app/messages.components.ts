import { Component } from "@angular/core";
import { NgForOf } from "@angular/common";


@Component({
    selector: "messages",
    template: `
    <div class="container container-fluid">
        <div class='jumbotron heading-font'>
            <h1 class='text-center'>messagebox</h1>
        </div>    
        <div class='list-group-item body-font' *ngFor='let message of messages'>
            <b>>>>  {{ message.owner }}</b> : {{ message.text }}
        </div>
        <br>
        <div class='btn-font'>
            <button type='button' class='btn btn-primary'>Click here!</button>
        </div>    
    </div>
        `
})

export class MessagesComponent {    
    messages = [{text:"Hello kid!", owner:"Kunal"},{text:"lol!", owner:"Nilesh"}];

}
 