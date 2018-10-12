import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { checkFindListPage } from './check-find-list';
import { videoPlayerModule } from '../../../../components/videoPlayer/videoPlayer.module';

@NgModule({
  declarations: [
    checkFindListPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    videoPlayerModule,
    IonicPageModule.forChild(checkFindListPage),
  ],
})
export class checkFindListModule {}
