import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PageExamplePage } from './page-example';
import { GeolocationServer } from '../../base/Geolocation';
import { ComponentMapModule } from '../../components/component-map/component-map.module';
import { InfiniteScrollModule } from '../../components/ion-infinite-scroll/ion-infinite-scroll.module';

@NgModule({
  declarations: [
    PageExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(PageExamplePage),
    ComponentMapModule,
    InfiniteScrollModule
  ],
  providers: [
    Geolocation,
    GeolocationServer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class PageExamplePageModule {}
