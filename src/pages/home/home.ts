import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramPage } from '../program/program';
import { AktualityPage } from '../aktuality/aktuality';
import { BorekPage } from '../borek/borek';
import { KontaktyPage } from '../kontakty/kontakty';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController) {
this.pages = [
      { title: 'Aktuality', component: AktualityPage },
      { title: 'Program', component: ProgramPage },
       { title: 'Bořek', component: BorekPage },
       { title: 'Kontakty', component: KontaktyPage }
    ];
  }
openPage(page) {

    this.navCtrl.push(page.component);
  }
}
