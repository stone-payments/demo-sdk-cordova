import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var devices_activity: any;

@Component({
	selector: 'page-cancel',
	templateUrl: 'cancel.html'
})

export class CancelTransactionPage implements OnInit {

  private device : any[] = [];

	constructor(public navCtrl: NavController) {
	}

  ngOnInit(): void {
    let scope = this;
    devices_activity.devicesActivity((arrayList: any) => {
      scope.device = arrayList;
      for (let i = scope.device.length - 1; i >= 0; i--) {
        console.log('devices: ' + scope.device[i]);
      }
    }, () => {
      alert("Error calling Devices Stone SDK Plugin");
    });
  }

  onBTSubmit(event, value) {
    devices_activity.deviceSelected(
      value,
      function() {
        console.log('Pareado com sucesso!');
      }, function() {
        console.log('Erro ao Parear!');
      }
    );
    console.log('value: ' + value);
  }

}
