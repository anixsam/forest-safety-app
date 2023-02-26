import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {

  public screenHeight : number;
  public screenWidth : number;

  public videoOptions: MediaTrackConstraints = {
    width: { ideal: 2160   },
    height: { ideal: 1080 }
  };

  constructor() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
   }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
    }).catch(error => {
      console.error(error);
    })
  }

}
