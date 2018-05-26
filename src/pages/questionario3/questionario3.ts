import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario2Page } from '../questionario2/questionario2';
import { Questionario4Page } from '../questionario4/questionario4';
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-questionario3',
  templateUrl: 'questionario3.html',
})
export class Questionario3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  presentLoading3() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
  }

  btnAnterior3() {
    this.navCtrl.push(Questionario2Page);
  }

  btnProximo3() {
    this.navCtrl.push(Questionario4Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario3Page');
  }

}
