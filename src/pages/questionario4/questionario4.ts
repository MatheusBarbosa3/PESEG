import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Questionario3Page } from '../questionario3/questionario3';
import { AngularFireDatabase } from 'angularfire2/database';
import { ResultadoPage } from '../resultado/resultado';

@IonicPage()
@Component({
  selector: 'page-questionario4',
  templateUrl: 'questionario4.html',
})
export class Questionario4Page{
  o;
  p;
  q;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,
    public fdb: AngularFireDatabase ) {
    
  }
  presentLoading4() {
    let loader = this.loadingCtrl.create({
      content: "Finalizando...",
      duration: 300
    });
    loader.present();
  }

  btnAnterior4() {
    this.navCtrl.popTo(Questionario3Page);
  }

  btnFinalizar() {
    if (this.o == "não" || this.p == "não" || this.q == "não") {
      this.navCtrl.push(ResultadoPage, {param4: "Seu nível de segurança é satisfatório"}); 
      
    }else{
      this.navCtrl.push(ResultadoPage, {param5: "Seu nível de segurança é o Ideal"}); 
    }
    // this.fdb.list("/questionario4/").push(this.o);
    // this.fdb.list("/questionario4/").push(this.p);
    // this.fdb.list("/questionario4/").push(this.q);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario4Page');
  }

}
