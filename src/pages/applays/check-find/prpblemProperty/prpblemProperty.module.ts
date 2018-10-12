import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { prpblemPropertyPage } from './prpblemProperty';

@NgModule({
  declarations: [
    prpblemPropertyPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    IonicPageModule.forChild(prpblemPropertyPage),
  ],
})
export class prpblemPropertyPageModule {}
