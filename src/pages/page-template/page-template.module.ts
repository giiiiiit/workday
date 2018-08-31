import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageTemplatePage } from './page-template';

@NgModule({
  declarations: [
    PageTemplatePage,
  ],
  imports: [
    IonicPageModule.forChild(PageTemplatePage)
  ],
})
export class PageTemplatePageModule {}
