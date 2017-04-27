import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

declare var transaction_list_activity: any;
declare var transaction_item_selected_activity: any;

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})

export class TransactionListPage implements OnInit  {

  private list : any[] = [];

  private optionSelected: string;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {
  }

  ngOnInit(): void {
    let scope = this;
    transaction_list_activity.transactionListActivity((arrayList: any) => {
      scope.list = arrayList;
      for (let i = scope.list.length - 1; i >= 0; i--) {
        scope.list[i];
      }
    }, () => {
      alert("Error calling Transaction List Plugin");
    });
  }

  send(value) {
    console.log("value received from user click: " + value);
    transaction_item_selected_activity.transactionClicked(this.optionSelected, value, this.ok, this.fail);
  }

  ok() {
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
          this.optionSelected = 'CANCEL';
          this.send(value);
        }
      },{
        text: 'IMPRIMIR TRANSAÇÃO',
        handler: data => {
          this.optionSelected = 'PRINT';
          this.send(value);
        }
      }]
    });
    prompt.present();
  }

}
