import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { mySettingPage } from './mySetting';


@NgModule({
  declarations: [
    mySettingPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    IonicPageModule.forChild(mySettingPage),
  ],
})
export class mySettingModule {}
