import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario2Page } from '../questionario2/questionario2';
import { Questionario4Page } from '../questionario4/questionario4';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ResultadoPage } from '../resultado/resultado';


@IonicPage()
@Component({
  selector: 'page-questionario3',
  templateUrl: 'questionario3.html',
})
export class Questionario3Page {
  arrData = [];
  j;
  k;
  l;
  m;
  n;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public fdb: AngularFireDatabase) {
    this.fdb.list("/questionario3/").snapshotChanges().subscribe(_data => {
      this.arrData = _data;
      console.log(this.arrData);
    })
  }
  presentLoading3() {
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 300
    });
    loader.present();
  }

  btnAnterior3() {
    this.navCtrl.popTo(Questionario2Page);
  }

  btnProximo3() {
    if (this.j == "não" || this.k == "não" || this.l == "não" || this.m == "não") {
      this.navCtrl.push(Questionario4Page, {param3: "Seu nível de segurança é Seguro"}); 
      
    }else{
      this.navCtrl.push(Questionario4Page, {param4: "Seu nível de segurança é Satisfatório"}); 
    }
    // this.fdb.list("/questionario3/").push(this.j);
    // this.fdb.list("/questionario3/").push(this.k);
    // this.fdb.list("/questionario3/").push(this.l);
    // this.fdb.list("/questionario3/").push(this.m);
    // this.fdb.list("/questionario3/").push(this.n);
    //this.navCtrl.push(Questionario4Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario3Page');
  }

}
