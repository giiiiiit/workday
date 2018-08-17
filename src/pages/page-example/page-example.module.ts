import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageExamplePage } from './page-example';
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
})
export class PageExamplePageModule {}
