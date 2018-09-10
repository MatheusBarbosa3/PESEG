import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  nivel1 = '';
  nivel2 = '';
  nivel3 = '';
  nivel4 = '';
  nivel5 = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.nivel1 = this.navParams.get("param1");
    this.nivel2 = this.navParams.get("param2");
    this.nivel3 = this.navParams.get("param3");
    this.nivel4 = this.navParams.get("param4");
    this.nivel5 = this.navParams.get("param5");

  }
  presentLoadingResult(){
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 300
    });
    loader.present();

  }
  btnAcMelhoria() {
    //this.navCtrl.push(AcoesMelhoria);
  }
  btnConcluir(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

}
