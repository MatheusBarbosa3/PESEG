import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario2Page } from '../questionario2/questionario2';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { RequisitosPage } from '../requisitos/requisitos';
import { ServicoProvider } from '../../providers/servico/servico';
import { NotifierService } from 'angular-notifier';

@IonicPage()
@Component({
  selector: 'page-questionario',
  templateUrl: 'questionario.html',
})
export class QuestionarioPage {
  a;
  b;
  c;
  d;
  escolha: string = '';
  static question = new Array(18);
  servicoProvider: ServicoProvider;
  choice: string;
  private notifier: NotifierService;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public fdb: AngularFireDatabase, servico: ServicoProvider,
    notifier: NotifierService) {

    //pegando o provider servico e injetando em requisitos, passando via parametro para questionario  
    this.servicoProvider = servico;
    this.choice = servico.getEscolha();
    this.notifier = notifier;
  }

  getValor(escolha: string) {
    this.servicoProvider.escolha = escolha;
  }

  btnAnterior() {
    this.navCtrl.popTo(RequisitosPage);
  }

  btnProximo() {
    if (this.a == "não") {
      QuestionarioPage.question[0] = "F";
    } else {
      QuestionarioPage.question[0] = "V";
    }

    if (this.b == "não") {
      QuestionarioPage.question[1] = "F";
    } else {
      QuestionarioPage.question[1] = "V";
    }

    if (this.c == "não") {
      QuestionarioPage.question[2] = "F";
    } else {
      QuestionarioPage.question[2] = "V";
    }

    if (this.d == "não") {
      QuestionarioPage.question[3] = "F";
    } else {
      QuestionarioPage.question[3] = "V";
    }

    if (this.a == '') {
      this.notifier.notify('warning', 'Whoops! Respondeu todas questões?');
    } else {
      this.navCtrl.push(Questionario2Page);
      let loader = this.loadingCtrl.create({
        content: "Carregando...",
        duration: 200
      });
      loader.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionarioPage');
  }
}
