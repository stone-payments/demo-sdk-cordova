import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var stone_sdk: any;

@Component({
	selector: 'page-validation',
	templateUrl: 'validation.html'
})

export class ValidationPage implements OnInit{

	constructor(public navCtrl: NavController) {
	}

	ngOnInit(): void {
  }

	onSubmit(event, value) {
    stone_sdk.validation(value, this.success, this.fail);
    console.log('stoneCode: ' + value);
	}

	success(success) {
    alert(success);
  }

  fail(err) {
    alert(err);
  }

}
