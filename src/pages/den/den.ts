import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as program from '../../assets/program.json';

@Component({
  selector: 'page-den',
  templateUrl: 'den.html'
})
export class DenPage {

  aktivity;
  den;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var den = navParams.get('den');
    this.aktivity = program[den].program;
    this.den = den;

  }



}
