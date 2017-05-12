import { Component, } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var stone_sdk: any;

@Component({
	selector: 'tables-validation',
	templateUrl: 'tables.html'
})

export class TablesPage {

	constructor(public navCtrl: NavController) {
	}

  onTablesDownload() {
    stone_sdk.tablesDownload((success) => {
      alert(success);
    }, (err) => {
      alert('Erro ao realizar o download das tabelas: ' + err);
    });
	}

  onTablesUpdate() {
    stone_sdk.tablesUpdate((success) => {
      alert(success);
      console.log('Teste OK');
    }, (err) => {
      alert(err);
      console.log('Teste Fail');
    });
	}

}
