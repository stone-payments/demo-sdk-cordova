import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
	selector: 'page-cancel',
	templateUrl: 'cancel.html'
})

export class CancelTransactionPage implements OnInit {

	constructor(public navCtrl: NavController) {
	}

  ngOnInit(): void {
  }

}
