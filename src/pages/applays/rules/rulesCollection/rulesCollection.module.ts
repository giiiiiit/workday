import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { rulesCollectionPage } from './rulesCollection';


@NgModule({
  declarations: [
    rulesCollectionPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    IonicPageModule.forChild(rulesCollectionPage),
  ]
})
export class rulesCollectionModule {}
