import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonFooter
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [
    IonContent, CommonModule, FormsModule, IonFooter, RouterModule, IonicModule
  ]
})
export class SignUpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
