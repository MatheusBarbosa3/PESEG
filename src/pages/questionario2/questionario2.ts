import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';
import { Questionario3Page } from '../questionario3/questionario3';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
//import { ResultadoPage } from '../resultado/resultado';


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
    //     this.fdb.list(this.path).update(questionario.key, { key: this.path})
    //     .then(()=> resolve())
    //     .catch((e)=> reject(e));
    //    }else{
    //      this.fdb.list(this.path)
    //      .push({key: this.path })
    //      .then(()=> resolve());
    //    }
    // });
  
    this.navCtrl.popTo(QuestionarioPage);
  }

  btnProximo2() {
    if (this.e == "não" || this.f == "não" || this.g == "não" || this.h == "não") {
      this.navCtrl.push(Questionario3Page, {param2: "Seu nível de segurança é Mínimo"}); 
      
    }else{
      this.navCtrl.push(Questionario3Page, {param3: "Seu nível de segurança é Seguro"}); 
    }
    // this.fdb.list(this.path).push(this.e);
    // this.fdb.list(this.path).push(this.f);
    // this.fdb.list(this.path).push(this.g);
    // this.fdb.list(this.path).push(this.h);
    // this.fdb.list(this.path).push(this.i);
    //this.navCtrl.push(Questionario3Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario2Page');
  }

}
