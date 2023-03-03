import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  public title : string = "";
  public message : any = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit(): void {
    const animal : string = this.data.data.animal
    this.title = this.data.type === 'fire' ? "Fire Alert" : "Wildlife Crossing Alert";
    this.message = this.data.type === 'fire' ? "A fire has been detected in the area" : `${animal[0].toUpperCase() + animal.slice(1)} has been spotted crossing the area`;
  }

}
