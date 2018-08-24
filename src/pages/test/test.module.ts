import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { SampleSignaturepadModule } from '../../components/sample-signaturepad/sample-signaturepad.module';
import { ComponentMapModule } from '../../components/component-map/component-map.module';
import { InfiniteScrollModule } from '../../components/ion-infinite-scroll/ion-infinite-scroll.module';
@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    SampleSignaturepadModule,
    ComponentMapModule,
    InfiniteScrollModule
  ]
})
export class TestPageModule {}
