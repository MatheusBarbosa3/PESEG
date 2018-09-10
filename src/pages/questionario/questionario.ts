import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario2Page } from '../questionario2/questionario2';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
//import { ResultadoPage } from '../resultado/resultado';

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
    if (this.a == "não" || this.b == "não" || this.c == "não" ) {
      this.navCtrl.push(Questionario2Page, {param1: "Seu nível de segurança é Insatisfatório"}); 
      
    }else{
      this.navCtrl.push(Questionario2Page, {param2: "Seu nível de segurança é Mínimo"}); 
    }
    //  this.fdb.list(this.path).push(this.a);
    //  this.fdb.list(this.path).push(this.b);
    //  this.fdb.list(this.path).push(this.c);
    //  this.fdb.list(this.path).push(this.d)
    //this.navCtrl.push(Questionario2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionarioPage');
  }

}
