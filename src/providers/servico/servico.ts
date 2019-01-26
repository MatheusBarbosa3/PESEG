//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoProvider {
  escolha: string = '';

  // constructor(public http: HttpClient) {
  //   console.log('Hello ServicoProvider Provider');
  // }

  getEscolha() {
    return this.escolha;
  }

  setEscolha(nova: string) {
    this.escolha = nova;
  }

}
