import { Injectable }              from '@angular/core';
import { Http } from '@angular/http';

import { Instalment, Environment } from './app.model';
import { INSTALMENTS } from './app.mock-instalments';
import { ENVIRONMENTS } from './app.mock-environment';

import "rxjs/add/operator/toPromise";

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  getIntalments(): Promise<Instalment[]> {
    return Promise.resolve(INSTALMENTS);
  }

  getEnvs(): Promise<Environment[]> {
    return Promise.resolve(ENVIRONMENTS);
  }
}
