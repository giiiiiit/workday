import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { checkFindSearchPage } from './check-find-search';

@NgModule({
  declarations: [
    checkFindSearchPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    IonicPageModule.forChild(checkFindSearchPage),
  ],
})
export class checkFindSearchModule {}
