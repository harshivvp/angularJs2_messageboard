import { Component } from "@angular/core";
import { NgForOf } from "@angular/common";
import { WebService } from "./web.service";

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

    constructor(private webService: WebService){}

    async ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var response = await this.webService.getMessages(); 
        this.messages = response.json();
    }
    messages = [{text:"Hello kid!", owner:"Kunal"},{text:"lol!", owner:"Nilesh"}];
}
 