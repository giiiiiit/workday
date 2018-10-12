import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionVerifyDetailPage } from './question-verify-detail';

@NgModule({
  declarations: [
    QuestionVerifyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionVerifyDetailPage),
  ],
})
export class QuestionVerifyDetailPageModule {}
