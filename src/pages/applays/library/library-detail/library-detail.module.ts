import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { libraryDetailPage } from './library-detail';

@NgModule({
  declarations: [
    libraryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(libraryDetailPage),
  ],
  exports: [libraryDetailPage],
})
export class libraryDetailModule {}
