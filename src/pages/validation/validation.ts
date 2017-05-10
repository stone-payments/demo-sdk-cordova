import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var stone_sdk: any;
declare var cordova: any;

@Component({
	selector: 'page-validation',
	templateUrl: 'validation.html'
})

export class ValidationPage implements OnInit{

  private permissions = cordova.plugins.permissions;

	constructor(public navCtrl: NavController) {
	}

	ngOnInit(): void {
    this.permissions.requestPermission(this.permissions.READ_EXTERNAL_STORAGE, this.permissionSuccess, this.permissionError);
    this.permissions.requestPermission(this.permissions.READ_PHONE_STATE, this.permissionSuccess, this.permissionError);
  }

  permissionSuccess(status) {
    console.log('Yes :D' + status);
  }

  permissionError(err) {
    console.warn('Camera or Accounts permission is not turned on ' + err);
  }

	onSubmit(event, value) {
    stone_sdk.validation(value, this.success, this.fail);
    console.log('stoneCode: ' + value);
	}

	success() {
    console.log("Dados enviados com sucesso!");
  }

  fail(err) {
    console.log("Error Calling Validation Stone SDK Plugin " + err);
  }

}
