import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocketSubject<any> | undefined;
  private subscriptions : Subscription = new Subscription();
  
  constructor() 
  {}

  public alertTrigger = new BehaviorSubject({});

  private handleMessage(message : any) {
    switch(message.type) 
    {
      case "fire" :
        this.triggerAlert("fire", message.data);
        break;
      case "wildlife" :
        this.triggerAlert("wildlife", message.data);
        break;
    }
  }

  public connect() {
    console.log("Connecting to websocket");
    this.socket = new WebSocketSubject('ws://localhost:9999');

    this.subscriptions.add(this.socket.subscribe(
      (message) => 
      {
        this.handleMessage(message)
      }
    ));
  }

  private triggerAlert( type:string , data:any) {
    this.alertTrigger.next({
      type : type,
      data : data
    })
  }
}