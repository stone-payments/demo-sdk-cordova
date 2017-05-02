import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AppService } from './app.service';

import { TransactionListPage } from '../pages/list/list';
import { DevicesPage } from '../pages/devices/devices';
import { TransactionPage } from '../pages/transaction/transaction';
import { ValidationPage } from '../pages/validation/validation';
import { EmailPage } from '../pages/email/email';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TransactionListPage,
    TransactionPage,
    ValidationPage,
    DevicesPage,
    EmailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionListPage,
    TransactionPage,
    ValidationPage,
    DevicesPage,
    EmailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    AppService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
