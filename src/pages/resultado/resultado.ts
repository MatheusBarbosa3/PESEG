import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MelhoriaPage } from '../melhoria/melhoria';

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {
  nivel1 = '';
  imagem1 = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.nivel1 = this.navParams.get("resultado");
    this.imagem1 = this.navParams.get("imagem");
  }

  presentLoadingResult() {
    let loader = this.loadingCtrl.create({
      content: "Concluindo...",
      duration: 500
    });
    loader.present();
  }
  
  //De acordo com o parametro passado na pagina resultado, mostra o parametro da pagina melhoria
  btnAcMelhoria() {
    if (this.nivel1 == "O nível de segurança é Informal") {
      this.navCtrl.push(MelhoriaPage, {
        acao: "Para reverter este cenário, são priorizadas ações de melhorias com  seu respectivo nível de prioridade,"
          + " onde a prioridade nível 1 é alta, a prioridade nível 2 é média, e a prioridade nível 3 é baixa."
          + " Tais ações de melhorias mais cotadas e com seu respectivo nível de prioridade são:"
          + " Construção das documentações (1); Elaboração de ferramentas visuais (1); Divulgação das políticas (1);"
          + " Treinamento e capacitação (1); Definição de responsabilidades (1); Implementações (1); e Aquisições (1)."
      });

    } else if (this.nivel1 == "O nível de segurança é Mínimo") {
      this.navCtrl.push(MelhoriaPage, {
        acao: "Para reverter este cenário, são priorizadas ações de melhorias com  seu respectivo nível de prioridade,"
          + " onde a prioridade nível 1 é alta, a prioridade nível 2 é média, e a prioridade nível 3 é baixa."
          + " Tais ações de melhorias mais cotadas e com seu respectivo nível de prioridade são:"
          + " Construção das documentações (1); Elaboração de ferramentas visuais (1); Divulgação das políticas (1);"
          + " Treinamento e capacitação (2); Definição de responsabilidades (1); Implementações (1); e Aquisições (2)."
      });

    } else if (this.nivel1 == "O nível de segurança é Seguro") {
      this.navCtrl.push(MelhoriaPage, {
        acao: "Para reverter este cenário, são priorizadas ações de melhorias com  seu respectivo nível de prioridade,"
          + " onde a prioridade nível 1 é alta, a prioridade nível 2 é média, e a prioridade nível 3 é baixa."
          + " Tais ações de melhorias mais cotadas e com seu respectivo nível de prioridade são:"
          + " Construção das documentações (2); Elaboração de ferramentas visuais (2); Divulgação das políticas (2);"
          + " Treinamento e capacitação (3); Definição de responsabilidades (2); Implementações (2); e Aquisições (3)."
      });
    } else if (this.nivel1 == "O nível de segurança é Satisfatório") {
      this.navCtrl.push(MelhoriaPage, {
        acao: "Para reverter este cenário, são priorizadas ações de melhorias com  seu respectivo nível de prioridade,"
          + " onde a prioridade nível 1 é alta, a prioridade nível 2 é média, e a prioridade nível 3 é baixa."
          + " Tais ações de melhorias mais cotadas e com seu respectivo nível de prioridade são:"
          + " Construção das documentações (2); Elaboração de ferramentas visuais (2); Divulgação das políticas (3);"
          + " Treinamento e capacitação (3); Definição de responsabilidades (3); Implementações (3); e Aquisições (3)."
      });

    } else if (this.nivel1 == "O nível de segurança é o Ideal") {
      this.navCtrl.push(MelhoriaPage, {
        acao: "Para reverter este cenário, são priorizadas ações de melhorias com  seu respectivo nível de prioridade,"
          + " onde a prioridade nível 1 é alta, a prioridade nível 2 é média, e a prioridade nível 3 é baixa."
          + " Tais ações de melhorias mais cotadas e com seu respectivo nível de prioridade são:"
          + " Construção das documentações (3); Elaboração de ferramentas visuais (3); Divulgação das políticas (3);"
          + " Treinamento e capacitação (3); Definição de responsabilidades (3); Implementações (3); e Aquisições (3)."
      });
    }
  }

  btnConcluir() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

}
