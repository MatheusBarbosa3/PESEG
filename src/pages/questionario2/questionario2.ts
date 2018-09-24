import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';
import { Questionario3Page } from '../questionario3/questionario3';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { RequisitosPage } from '../requisitos/requisitos';

@IonicPage()
@Component({
  selector: 'page-questionario2',
  templateUrl: 'questionario2.html',
})
export class Questionario2Page {
  public path = 'questionario2/';
  e;
  f;
  g;
  h;
  i;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public fdb: AngularFireDatabase) {
  }

  presentLoading2() {
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 300
    });
    loader.present();
  }

  btnAnterior2() {

    // return new Promise((resolve, reject) => {
    //   if (questionario.key) {
    //     this.fdb.teste(this.path).update(questionario.key, { key: this.path})
    //     .then(()=> resolve())
    //     .catch((e)=> reject(e));
    //    }else{
    //      this.fdb.teste(this.path)
    //      .push({key: this.path })
    //      .then(()=> resolve());
    //    }
    // });

    this.navCtrl.popTo(QuestionarioPage);
  }

  btnProximo2() {

    if (this.e == "não") {
      QuestionarioPage.teste[4] = "F";
    } else {
      QuestionarioPage.teste[4] = "V";
    }

    if (this.f == "não") {
      QuestionarioPage.teste[5] = "F";
    } else {
      QuestionarioPage.teste[5] = "V";
    }

    if (this.g == "não") {
      QuestionarioPage.teste[6] = "F";
    } else {
      QuestionarioPage.teste[6] = "V";
    }

    if (this.h == "não") {
      QuestionarioPage.teste[7] = "F";
    } else {
      QuestionarioPage.teste[7] = "V";
    }

    if (this.i == "não") {
      QuestionarioPage.teste[8] = "F";
    } else {
      QuestionarioPage.teste[8] = "V";
    }

    this.navCtrl.push(Questionario3Page);
  }

  btnRequisitos2() {
    this.navCtrl.push(RequisitosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario2Page');
  }

}
