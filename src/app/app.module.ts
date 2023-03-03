import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { WebcamComponent } from './components/webcam/webcam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { WebcamModule } from 'ngx-webcam';
import { AlertComponent } from './components/alert/alert.component';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog'; 
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WebcamComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    WebcamModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [MatDialog,MatDialogConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
