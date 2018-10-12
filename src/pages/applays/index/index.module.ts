import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexPage } from './index';
import { SlidesModule } from '../../../components/slides/slides.module'

@NgModule({
  declarations: [
    IndexPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexPage),
    SlidesModule
  ],
})
export class IndexPageModule {}
