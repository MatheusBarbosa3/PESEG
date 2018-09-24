import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario2Page } from '../questionario2/questionario2';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { RequisitosPage } from '../requisitos/requisitos';

@IonicPage()
@Component({
  selector: 'page-questionario',
  templateUrl: 'questionario.html',
})
export class QuestionarioPage {
  // public path = 'questionario1/';
  a;
  b;
  c;
  d;
  static teste = new Array(18);

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public fdb: AngularFireDatabase) {

  }

  // getALL() {
  //   return this.fdb.list(this.path)
  //   .snapshotChanges()
  //   .map(changes => {
  //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  //   })
  // }

  // get(key: String){
  //   return this.fdb.object(this.path + key)
  //   .snapshotChanges()
  //   .map(c => {
  //     return {key: c.key, ...c.payload.val()}
  //   })
  // }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 300
    });
    loader.present();
  }

  btnProximo() {
    if (this.a == "não") {
      QuestionarioPage.teste[0] = "F";
    } else {
      QuestionarioPage.teste[0] = "V";
    }

    if (this.b == "não") {
      QuestionarioPage.teste[1] = "F";
    } else {
      QuestionarioPage.teste[1] = "V";
    }

    if (this.c == "não") {
      QuestionarioPage.teste[2] = "F";
    } else {
      QuestionarioPage.teste[2] = "V";
    }

    if (this.d == "não") {
      QuestionarioPage.teste[3] = "F";
    } else {
      QuestionarioPage.teste[3] = "V";
    }

    this.navCtrl.push(Questionario2Page);

    //  this.fdb.list(this.path).push(this.a);
    //  this.fdb.list(this.path).push(this.b);
    //  this.fdb.list(this.path).push(this.c);
    //  this.fdb.list(this.path).push(this.d)
    //this.navCtrl.push(Questionario2Page);
  }

  btnRequisitos() {
    this.navCtrl.push(RequisitosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionarioPage');
  }

}
