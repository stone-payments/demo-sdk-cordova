import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var stone_sdk: any;

@Component({
	selector: 'page-device',
	templateUrl: 'devices.html'
})

export class DevicesPage implements OnInit {

  private device : any[] = [];

	constructor(public navCtrl: NavController) {
	}

  ngOnInit(): void {
    let scope = this;
    stone_sdk.device((arrayList: any) => {
      scope.device = arrayList;
      for (let i = scope.device.length - 1; i >= 0; i--) {
        console.log('devices: ' + scope.device[i]);
      }
    }, (err) => {
      alert(err);
    });
  }

  onBTSubmit(event, value) {
    stone_sdk.deviceSelected(
      value,
      function(success) {
        console.log(success);
      }, function(err) {
        console.log(err);
      }
    );
    console.log('Selecionado: ' + value);
  }

}
