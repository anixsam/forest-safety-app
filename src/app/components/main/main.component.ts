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
  private dialogContainer : any;

  constructor(
    private websocketService : WebsocketService,
    private apiService : ApiService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.timer();
    this.subscribeToAlerts();
    this.websocketService.connect();
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
          this.playAudio();
        }
      })
    )
  }

  private triggerAlert(type : string, data : any) {
    this.dialogContainer  ? this.dialogContainer.close() : null
    this.dialogContainer = this.dialog.open(AlertComponent,{disableClose:true,data:{
      type : type,
      data : data
    }})

    this.dialogContainer.afterClosed().subscribe(() => {
      this.dialogContainer = undefined;
    });
  }

  private playAudio() {
    let audio = new Audio();
    const audioFile = this.apiService.getAudio();
    console.log(audioFile);
    // audio.src = audioFile;
    const reader = new FileReader();
    // reader.readAsDataURL(audioFile);
    // reader.onloadend = () => {
    //   const base64data = reader.result;
    //   this.audio.src = base64data as string;
    //   this.audio.load();
    //   this.audio.play();
    // };
    audio.load();
    audio.play();
  }

}
