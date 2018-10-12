import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from './pipes/pipes.module';
import { ruleSearchPage } from './rule-search';

@NgModule({
  declarations: [
    ruleSearchPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ruleSearchPage),
  ],
})
export class ruleSearchModule {}
