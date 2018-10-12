import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionVerifyPage } from './question-verify';

@NgModule({
  declarations: [
    QuestionVerifyPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionVerifyPage),
  ],
})
export class QuestionVerifyPageModule {}
