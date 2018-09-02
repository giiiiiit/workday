import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormPage } from './form';
// import emailMask from 'text-mask-addons/dist/emailMask';

@NgModule({
  declarations: [
    FormPage,
  ],
  imports: [
    IonicPageModule.forChild(FormPage)
  ],
})
export class FormPageModule {}
