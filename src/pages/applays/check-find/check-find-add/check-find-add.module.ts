import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { checkFindAddPage } from './check-find-add';
import { videoPlayerModule } from '../../../../components/videoPlayer/videoPlayer.module';
import { uploadIimgVideoFileModule } from '../../../../components/upload-img-video-file/upload-img-video-file.module';
@NgModule({
  declarations: [
    checkFindAddPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    videoPlayerModule,
    uploadIimgVideoFileModule,
    IonicPageModule.forChild(checkFindAddPage),
  ],
})
export class checkFindAddModule {}
