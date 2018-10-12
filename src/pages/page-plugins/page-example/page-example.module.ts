import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PageExamplePage } from './page-example';

@NgModule({
  declarations: [
    PageExamplePage
  ],
  imports: [
    IonicPageModule.forChild(PageExamplePage)
  ],
})
export class PageExamplePageModule {}
