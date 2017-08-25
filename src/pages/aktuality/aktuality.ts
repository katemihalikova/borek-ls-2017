import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Injectable()
export class AktualityData {
  aktuality = [
    {
      autor: "Dita P.",
      datum: new Date("2017-08-23 05:32:04"),
      text: "Sraz na ranní jógu dnes už v 6:00!!!"
    }
  ];
}

@Component({
  selector: 'page-aktuality',
  templateUrl: 'aktuality.html'
})
export class AktualityPage {

  aktuality = this.data.aktuality;
  zprava = "";

  jmena = ["Bára G.", "Péťa K.", "Markétka Č.", "Eliška M.", "Kristý K.", "Kája L."]

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: AktualityData) {
  }

  odesliFormular() {
    this.aktuality.unshift({
      autor: this.jmena[nahodneCislo(0, 5)],
      datum: new Date(),
      text: this.zprava
    });
    this.zprava = "";
  }


}



function nahodneCislo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
