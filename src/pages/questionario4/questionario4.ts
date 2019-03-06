import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Questionario3Page } from '../questionario3/questionario3';
import { QuestionarioPage } from '../questionario/questionario';
import { AngularFireDatabase } from 'angularfire2/database';
import { ResultadoPage } from '../resultado/resultado';
import { ServicoProvider } from '../../providers/servico/servico';

@IonicPage()
@Component({
  selector: 'page-questionario4',
  templateUrl: 'questionario4.html',
})
export class Questionario4Page {
  o;
  p;
  q;
  servicoProvider: ServicoProvider;
  choice: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public fdb: AngularFireDatabase, servico: ServicoProvider) {

    //pegando o provider servico e injetando em requisitos, passando via parametro para questionario4
    this.servicoProvider = servico;
    this.choice = servico.getEscolha();
  }

  presentLoading4() {
    let loader = this.loadingCtrl.create({
      content: "Finalizando...",
      duration: 200
    });
    loader.present();
  }

  btnAnterior4() {
    this.navCtrl.popTo(Questionario3Page);
  }

  btnFinalizar() {
    if (this.o == "não") {
      QuestionarioPage.question[14] = "F";
    } else {
      QuestionarioPage.question[14] = "V";
    }

    if (this.p == "não") {
      QuestionarioPage.question[15] = "F";
    } else {
      QuestionarioPage.question[15] = "V";
    }

    if (this.q == "não") {
      QuestionarioPage.question[16] = "F";
    } else {
      QuestionarioPage.question[16] = "V";
    }

    for (let index = 0; index < QuestionarioPage.question.length - 1; index++) {
      console.log(QuestionarioPage.question[index]);
    }

    var countv = 0;
    var countf = 0;

    //Se a primeira questao for false
    if (QuestionarioPage.question[0] == "F") {
      this.navCtrl.push(ResultadoPage, {
        resultado: "O nível de segurança é Informal",
        imagem: "assets/imgs/icons8-escudo-de-exclusão-100.png"
      });
    } else {

      for (var i = 0; i <= QuestionarioPage.question.length; i++) {

        if (QuestionarioPage.question[i] == "F") {
          countf++;
        } else if (QuestionarioPage.question[i] == "V") {
          countv++;
        }
      }

      console.log(countf);
      console.log(countv);

      //Se todos forem true
      if (countv == 17) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é o Ideal",
          imagem: "assets/imgs/icons8-segurança-verificada-100.png"
        });
      }

      //Se entre 9 e 16 falses
      else if (countf >= 9 && countf <= 16) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é Mínimo",
          imagem: "assets/imgs/icons8-polegares-para-baixo-100.png"
        });
      }

      //Se entre 5 e 9 falses
      else if (countf >= 5 && countf <= 9) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é Seguro",
          imagem: "assets/imgs/icons8-cadeado-2-100.png"
        });
      }

      //Se entre 3 e 5 falses
      else if (countf >= 3 && countf <= 5) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é Satisfatório",
          imagem: "assets/imgs/icons8-polegar-para-cima-100.png"
        });
      }

      //Se até 2 falses
      else if (countf <= 2) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é o Ideal",
          imagem: "assets/imgs/icons8-segurança-verificada-100.png"
        });
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario4Page');
  }

}
