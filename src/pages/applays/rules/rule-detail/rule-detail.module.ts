import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ruleDetailPage } from './rule-detail';

@NgModule({
  declarations: [
    ruleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ruleDetailPage),
  ],
  exports: [ruleDetailPage],
})
export class ruleDetailModule {}
