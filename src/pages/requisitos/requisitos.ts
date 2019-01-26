import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';
import { ServicoProvider } from '../../providers/servico/servico';
import { NotifierService } from 'angular-notifier';

@IonicPage()
@Component({
  selector: 'page-requisitos',
  templateUrl: 'requisitos.html',
})
export class RequisitosPage {
  escolha: string = '';
  servicoProvider: ServicoProvider;
  private notifier: NotifierService;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    servico: ServicoProvider, notifier: NotifierService) {

    //pegando o provider servico e injetando em requisitos, passando via parametro para questionario
    this.servicoProvider = servico;
    this.notifier = notifier;
  }

  //metodo de armazenamento da escolha para ser passado via parametro para as demais paginas
  getValor(escolha: string) {
    this.servicoProvider.escolha = escolha;
  }

  btnProsseguir() {
    if (this.servicoProvider.escolha == '') {
      this.notifier.notify('warning', 'Escolha uma opção para prosseguir');
    } else {
      this.navCtrl.push(QuestionarioPage);
      let loader = this.loadingCtrl.create({
        content: "Carregando...",
        duration: 200
      });
      loader.present();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequisitosPage');
  }

}
