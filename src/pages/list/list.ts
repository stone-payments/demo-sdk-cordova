import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var transaction_list_activity: any;

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})

export class TransactionListPage implements OnInit  {

  private list : any[] = [];

  constructor(public navCtrl: NavController) {
  }

  ngOnInit(): void {
    let scope = this;
    transaction_list_activity.transactionListActivity((arrayList: any) => {
      scope.list = arrayList;
      for (let i = scope.list.length - 1; i >= 0; i--) {
        console.log('list: ' + scope.list[i]);
        console.log('Lista exibida com sucesso!');
      }
    }, () => {
      alert("Error calling Transaction List Stone SDK Plugin");
    });
  }

}
