import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  public alertTrigger = new BehaviorSubject({});

  private handleMessage(message : any) {
  }

  private triggerAlert( type:string , data:any) {
    this.alertTrigger.next({})
  }
}