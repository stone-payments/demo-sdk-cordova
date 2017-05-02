import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var stone_sdk: any;

@Component({
	selector: 'page-validation',
	templateUrl: 'validation.html'
})

export class ValidationPage  {

	constructor(public navCtrl: NavController) {
	}

	onSubmit(event, value) {
      stone_sdk.validation(
      value,
      function() {
        console.log("Dados enviados com sucesso!");
      }, function(err) {
        alert("Error Calling Validation Stone SDK Plugin");
        console.log('erro: ' + err);
      }
    );
    console.log('stoneCode: ' + value);
	}

}
