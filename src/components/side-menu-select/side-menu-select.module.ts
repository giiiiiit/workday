import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SideMenuSelectComponent } from './side-menu-select';


@NgModule({
  declarations: [
    SideMenuSelectComponent,
  ],
  imports: [
    IonicPageModule.forChild(SideMenuSelectComponent),
  ],
  exports: [
    SideMenuSelectComponent
  ]
})
export class SideMenuSelectModule { }