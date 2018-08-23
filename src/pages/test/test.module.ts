import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { SampleSignaturepadModule } from '../../components/sample-signaturepad/sample-signaturepad.module';
import { ComponentMapModule } from '../../components/component-map/component-map.module';
@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    SampleSignaturepadModule,
    ComponentMapModule
  ]
})
export class TestPageModule {}
