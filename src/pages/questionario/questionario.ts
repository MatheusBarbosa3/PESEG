import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario2Page } from '../questionario2/questionario2';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-questionario',
  templateUrl: 'questionario.html',
})
export class QuestionarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
  }

  btnProximo() {
    
    this.navCtrl.push(Questionario2Page); 
  }    

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionarioPage');
  }

}
