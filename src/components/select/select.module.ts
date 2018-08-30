import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectComponent } from './select';


@NgModule({
  declarations: [
    SelectComponent,
  ],
  imports: [
    IonicPageModule.forChild(SelectComponent),
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }