import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionVerifyFormPage } from './question-verify-form';

@NgModule({
  declarations: [
    QuestionVerifyFormPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionVerifyFormPage),
  ],
})
export class QuestionVerifyFormPageModule {}
