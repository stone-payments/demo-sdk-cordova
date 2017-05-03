import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

declare var stone_sdk: any;

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})

export class TransactionListPage implements OnInit  {

  private list : any[] = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {
  }

  ngOnInit(): void {
    let scope = this;
    stone_sdk.transactionList((arrayList: any) => {
      scope.list = arrayList;
      for (let i = scope.list.length - 1; i >= 0; i--) {
        scope.list[i];
      }
    }, () => {
      alert("Error calling Transaction List Plugin");
    });
  }

  cancel(value) {
    stone_sdk.transactionCancel(value, this.success, this.fail);
  }

  success() {
    console.log('Cancelamento enviado com sucesso!');
  }

  fail(err) {
    alert("Error Sending value to Transaction List Plugin " + err);
  }

  showAlert(event, value) {
    console.log('Transação selecionada: ' + value);

    let prompt = this.alertCtrl.create({
      title: 'Selecione uma ação',
      subTitle: 'Informe se deseja cancelar ou imprimir a transação selecionada',
      message: 'Transação selecionada: ' + value,
      buttons: [{
        text: 'CANCELAR TRANSAÇÃO',
        handler: data => {
          this.cancel(value);
        }
      }]
    });
    prompt.present();
  }

}
