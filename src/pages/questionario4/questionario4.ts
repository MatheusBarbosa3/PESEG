import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Questionario3Page } from '../questionario3/questionario3';
import { QuestionarioPage } from '../questionario/questionario';
import { AngularFireDatabase } from 'angularfire2/database';
import { ResultadoPage } from '../resultado/resultado';
import { RequisitosPage } from '../requisitos/requisitos';

@IonicPage()
@Component({
  selector: 'page-questionario4',
  templateUrl: 'questionario4.html',
})
export class Questionario4Page {
  o;
  p;
  q;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public fdb: AngularFireDatabase) {

  }

  presentLoading4() {
    let loader = this.loadingCtrl.create({
      content: "Finalizando...",
      duration: 500
    });
    loader.present();
  }

  btnAnterior4() {
    this.navCtrl.popTo(Questionario3Page);
  }

  btnFinalizar() {
    if (this.o == "não") {
      QuestionarioPage.teste[14] = "F";
    } else {
      QuestionarioPage.teste[14] = "V";
    }

    if (this.p == "não") {
      QuestionarioPage.teste[15] = "F";
    } else {
      QuestionarioPage.teste[15] = "V";
    }

    if (this.q == "não") {
      QuestionarioPage.teste[16] = "F";
    } else {
      QuestionarioPage.teste[16] = "V";
    }

    for (let index = 0; index < QuestionarioPage.teste.length - 1; index++) {
      console.log(QuestionarioPage.teste[index]);
    }

    var countv = 0;
    var countf = 0;

    //Primeira questao false
    if (QuestionarioPage.teste[0] == "F") {
      this.navCtrl.push(ResultadoPage, {
        resultado: "O nível de segurança é Informal",
        imagem: "../../assets/imgs/icons8-escudo-de-exclusão-100.png"
      });
    } else {

      for (var i = 0; i <= QuestionarioPage.teste.length; i++) {

        if (QuestionarioPage.teste[i] == "F") {
          countf++;
        } else if (QuestionarioPage.teste[i] == "V") {
          countv++;
        }
      }

      console.log(countf);
      console.log(countv);

      //Todos Verdadeiros
      if (countv == 17) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é o Ideal",
          imagem: "../../assets/imgs/icons8-segurança-verificada-100.png"
        });
      }

      //Entre 9 e 16 falsos
      else if (countf >= 9 && countf <= 16) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é Mínimo",
          imagem: "../../assets/imgs/icons8-polegares-para-baixo-100.png"
        });
      }

      //Entre 5 e 9 falsos
      else if (countf >= 5 && countf <= 9) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é Seguro",
          imagem: "../../assets/imgs/icons8-cadeado-2-100.png"
        });
      }

      //Entre 3 e 5 falsos
      else if (countf >= 3 && countf <= 5) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é Satisfatório",
          imagem: "../../assets/imgs/icons8-polegar-para-cima-100.png"
        });
      }

      //Até 2 falsos
      else if (countf <= 2) {
        this.navCtrl.push(ResultadoPage, {
          resultado: "O nível de segurança é o Ideal",
          imagem: "../../assets/imgs/icons8-segurança-verificada-100.png"
        });
      }
    }
  }

  btnRequisitos4() {
    this.navCtrl.push(RequisitosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario4Page');
  }

}
