import { Component } from "@angular/core";

@Component({
    selector: "messages",
    template: "<h1>This is the message component!</h1>", 

})

export class MessagesComponent {    
    messages = [{text:"some random text", owner:"Kunal"},{text:"other random text", owner:"Nilesh"}];
}

