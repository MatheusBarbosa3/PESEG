import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario2Page } from '../questionario2/questionario2';
import { QuestionarioPage } from '../questionario/questionario';
import { Questionario4Page } from '../questionario4/questionario4';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ServicoProvider } from '../../providers/servico/servico';


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
  servicoProvider: ServicoProvider;
  choice: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public fdb: AngularFireDatabase, servico: ServicoProvider) {
      
    //pegando o provider servico e injetando em requisitos, passando via parametro para questionario3
    this.servicoProvider = servico;
    this.choice = servico.getEscolha();

  }
  presentLoading3() {
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 200
    });
    loader.present();
  }

  btnAnterior3() {
    this.navCtrl.popTo(Questionario2Page);
  }

  btnProximo3() {

    if (this.j == "não") {
      QuestionarioPage.question[9] = "F";
    } else {
      QuestionarioPage.question[9] = "V";
    }

    if (this.k == "não") {
      QuestionarioPage.question[10] = "F";
    } else {
      QuestionarioPage.question[10] = "V";
    }

    if (this.l == "não") {
      QuestionarioPage.question[11] = "F";
    } else {
      QuestionarioPage.question[11] = "V";
    }

    if (this.m == "não") {
      QuestionarioPage.question[12] = "F";
    } else {
      QuestionarioPage.question[12] = "V";
    }

    if (this.n == "não") {
      QuestionarioPage.question[13] = "F";
    } else {
      QuestionarioPage.question[13] = "V";
    }

    this.navCtrl.push(Questionario4Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario3Page');
  }

}
