import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { rulesResultListPage } from './rulesResultList';


@NgModule({
  declarations: [
    rulesResultListPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    IonicPageModule.forChild(rulesResultListPage),
  ]
})
export class rulesResultListModule {}
