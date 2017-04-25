import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Instalment } from './../../app/app.model';
import { AppService } from './../../app/app.service';

declare var transaction_activity: any;

@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html'
})

export class TransactionPage implements  OnInit {

  private showSelectOptions = false;
  private selectedValue: string = null;
  private paymentMethod: string;

  instalments: Instalment[];

	constructor(public navCtrl: NavController,
              private appService: AppService) {
	}

	ngOnInit(): void {
	  this.getInstalments();
  }

	getInstalments(): void {
	  this.appService.getIntalments().then(instalments => this.instalments = instalments);
  }

  paymentOption(event, value) {
	  if(value === 'DEBIT') {
	    this.paymentMethod = value;
      this.showSelectOptions = false;
    } else if(value === 'CREDIT') {
      this.paymentMethod = value;
      this.showSelectOptions = true;
    }
  }

	getTransaction(event, value) {
	  if(value === '' || this.selectedValue === 'SELECT' || (this.selectedValue === null && this.paymentMethod === 'CREDIT')) {
      console.log('Button Method: ' + this.paymentMethod);
	    console.log('Value: ' + this.selectedValue);
	    alert('Por favor, selecione uma opção válida');
    } else {
      var paymentTransaction : any;
      paymentTransaction = {
        amount: value,
        method: this.selectedValue,
        instalments: this.paymentMethod
      }
      transaction_activity.transactionActivity(
        paymentTransaction,
        this.selectedValue,
        this.success,
        this.failure
      );
    }
  }

  success() {
    console.log('Dados enviados com sucesso!');
  }

  failure() {
    console.log("Error calling Hello Plugin");
  }

}
