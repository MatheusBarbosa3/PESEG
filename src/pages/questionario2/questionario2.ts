import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';
import { Questionario3Page } from '../questionario3/questionario3';
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-questionario2',
  templateUrl: 'questionario2.html',
})
export class Questionario2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  presentLoading2() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
  }
  
  btnAnterior2() {
    this.navCtrl.push(QuestionarioPage);
  }

  btnProximo2() {
    this.navCtrl.push(Questionario3Page); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario2Page');
  }

}
