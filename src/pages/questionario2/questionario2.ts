import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';
import { Questionario3Page } from '../questionario3/questionario3';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ServicoProvider } from '../../providers/servico/servico';

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
  servicoProvider: ServicoProvider;
  choice: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public fdb: AngularFireDatabase, servico: ServicoProvider) {
    //pegando o provider servico e injetando em requisitos, passando via parametro para questionario2
    this.servicoProvider = servico;
    this.choice = servico.getEscolha();
  }

  presentLoading2() {
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 200
    });
    loader.present();
  }

  btnAnterior2() {
    this.navCtrl.popTo(QuestionarioPage);
  }

  btnProximo2() {

    if (this.e == "não") {
      QuestionarioPage.question[4] = "F";
    } else {
      QuestionarioPage.question[4] = "V";
    }

    if (this.f == "não") {
      QuestionarioPage.question[5] = "F";
    } else {
      QuestionarioPage.question[5] = "V";
    }

    if (this.g == "não") {
      QuestionarioPage.question[6] = "F";
    } else {
      QuestionarioPage.question[6] = "V";
    }

    if (this.h == "não") {
      QuestionarioPage.question[7] = "F";
    } else {
      QuestionarioPage.question[7] = "V";
    }

    if (this.i == "não") {
      QuestionarioPage.question[8] = "F";
    } else {
      QuestionarioPage.question[8] = "V";
    }

    this.navCtrl.push(Questionario3Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario2Page');
  }

}
