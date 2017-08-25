import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DenPage } from '../den/den';
@Component({
  selector: 'page-program',
  templateUrl: 'program.html'
})
export class ProgramPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

otevriDen(den) {

    this.navCtrl.push(DenPage, {den});
  }

}
