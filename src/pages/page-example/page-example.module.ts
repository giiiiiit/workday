import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageExamplePage } from './page-example';
import { ComponentExampleModule } from '../../components/component-example/component-example.module';
ComponentExampleModule



@NgModule({
  declarations: [
    PageExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(PageExamplePage),
    ComponentExampleModule,
  
  ],
})
export class PageExamplePageModule {}
