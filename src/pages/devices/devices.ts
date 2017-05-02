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
    }, () => {
      alert("Error calling Devices Stone SDK Plugin");
    });
  }

  onBTSubmit(event, value) {
    stone_sdk.deviceSelected(
      value,
      function() {
        console.log('Pareado com sucesso!');
      }, function() {
        console.log('Erro ao Parear!');
      }
    );
    console.log('Selecionado: ' + value);
  }

}
