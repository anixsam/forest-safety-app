import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public time : any = new Date().toLocaleString();
  private subscriptions : Subscription = new Subscription;

  constructor(
    private websocketService : WebsocketService,
    private apiService : ApiService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.timer();
    this.subscribeToAlerts();
  }

  private timer() {
    setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1000)
  }

  private subscribeToAlerts() {
    this.subscriptions.add(
      this.websocketService.alertTrigger.subscribe((alert : any) => {
        if(alert.type)
        {
          this.triggerAlert(alert.type, alert.data);
        }
      })
    )
  }

  private triggerAlert(type : string, data : any) {
    this.dialog.open(AlertComponent,{disableClose:true,data:{
      type : type,
      data : data
    }})
  }

}
