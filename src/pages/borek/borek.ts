import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-borek',
  templateUrl: 'borek.html'
})
export class BorekPage {

zprava = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

  }

odesliFormular() {
let toast = this.toastCtrl.create({
      message: 'Mňam mňam!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    this.zprava = "";
  }

}
