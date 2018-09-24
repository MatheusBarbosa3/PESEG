import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultadoPage } from '../resultado/resultado';

@IonicPage()
@Component({
  selector: 'page-melhoria',
  templateUrl: 'melhoria.html',
})
export class MelhoriaPage {
  melhoria = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.melhoria = this.navParams.get("acao");
  }

  btnOK(){
    this.navCtrl.popTo(ResultadoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MelhoriaPage');
  }

}
