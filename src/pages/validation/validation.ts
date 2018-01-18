import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Environment } from './../../app/app.model';
import { AppService } from './../../app/app.service';
declare var stone_sdk: any;

@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html'
})

export class ValidationPage implements OnInit {
  environments: Environment[];
  constructor(public navCtrl: NavController, private appService: AppService) {
  }

  ngOnInit(): void {
    this.getEnvs();
  }

  getEnvs(): void {
    this.appService.getEnvs().then(environments => this.environments = environments);
  }

  setSdkEnvironment(env) {
    stone_sdk.setEnvironment(env);
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
