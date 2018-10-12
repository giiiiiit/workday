import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { textPanelListPage } from './text-panel-list';

@NgModule({
  declarations: [
    textPanelListPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    IonicPageModule.forChild(textPanelListPage),
  ],
})
export class textPanelListModule {}
