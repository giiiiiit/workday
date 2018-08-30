import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LayoutMenuPage } from './layout-menu';

@NgModule({
  declarations: [
    LayoutMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(LayoutMenuPage),
  ],
})
export class LayoutMenuPageModule {}
