import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { imgPanelListPage } from './img-panel-list';

@NgModule({
  declarations: [
    imgPanelListPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    IonicPageModule.forChild(imgPanelListPage),
  ],
})
export class imgPanelListModule {}
