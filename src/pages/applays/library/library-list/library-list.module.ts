import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { libraryListPage } from './library-list';
import { videoPlayerModule } from '../../../../components/videoPlayer/videoPlayer.module';

@NgModule({
  declarations: [
    libraryListPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    videoPlayerModule,
    IonicPageModule.forChild(libraryListPage),
  ],
})
export class checkFindListModule {}
