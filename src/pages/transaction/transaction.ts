import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Instalment } from './../../app/app.model';
import { AppService } from './../../app/app.service';

declare var stone_sdk: any;

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
      stone_sdk.transaction(value, this.paymentMethod, this.selectedValue, this.success, this.failure);
      console.log("TransaçãoValue: " + value);
      console.log("TransaçãoInstalment: " + this.selectedValue);
      console.log("TransaçãoMethod: " + this.paymentMethod);
    }
  }

  success() {
    console.log('Dados enviados com sucesso!');
  }

  failure() {
    console.log("Error calling Transaction Stone SDK Plugin");
  }

}
