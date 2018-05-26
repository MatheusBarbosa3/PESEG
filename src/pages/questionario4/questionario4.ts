import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario3Page } from '../questionario3/questionario3';

@IonicPage()
@Component({
  selector: 'page-questionario4',
  templateUrl: 'questionario4.html',
})
export class Questionario4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  btnAnterior4() {
    this.navCtrl.push(Questionario3Page);
  }

  btnFinalizar() {
   // this.navCtrl.push(Questionario4Page); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario4Page');
  }

}
