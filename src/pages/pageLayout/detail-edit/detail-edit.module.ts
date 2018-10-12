import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailEditPage } from './detail-edit';

@NgModule({
  declarations: [
    DetailEditPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailEditPage),
  ],
})
export class DetailEditPageModule {}
