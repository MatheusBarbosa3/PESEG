import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario2Page } from '../questionario2/questionario2';
import { QuestionarioPage } from '../questionario/questionario';
import { Questionario4Page } from '../questionario4/questionario4';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { RequisitosPage } from '../requisitos/requisitos';


@IonicPage()
@Component({
  selector: 'page-questionario3',
  templateUrl: 'questionario3.html',
})
export class Questionario3Page {
  j;
  k;
  l;
  m;
  n;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public fdb: AngularFireDatabase) {
    // this.fdb.teste("/questionario3/").snapshotChanges().subscribe(_data => {
    //   this.arrData = _data;
    //   console.log(this.arrData);
    // })
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

    if (this.j == "não") {
      QuestionarioPage.teste[9] = "F";
    } else {
      QuestionarioPage.teste[9] = "V";
    }

    if (this.k == "não") {
      QuestionarioPage.teste[10] = "F";
    } else {
      QuestionarioPage.teste[10] = "V";
    }

    if (this.l == "não") {
      QuestionarioPage.teste[11] = "F";
    } else {
      QuestionarioPage.teste[11] = "V";
    }

    if (this.m == "não") {
      QuestionarioPage.teste[12] = "F";
    } else {
      QuestionarioPage.teste[12] = "V";
    }

    if (this.n == "não") {
      QuestionarioPage.teste[13] = "F";
    } else {
      QuestionarioPage.teste[13] = "V";
    }

    this.navCtrl.push(Questionario4Page);

    // this.fdb.teste("/questionario3/").push(this.j);
    // this.fdb.teste("/questionario3/").push(this.k);
    // this.fdb.teste("/questionario3/").push(this.l);
    // this.fdb.teste("/questionario3/").push(this.m);
    // this.fdb.teste("/questionario3/").push(this.n);
    //this.navCtrl.push(Questionario4Page);
  }
  btnRequisitos3() {
    this.navCtrl.push(RequisitosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario3Page');
  }

}
