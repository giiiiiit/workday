import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { checkFindDetailPage } from './check-find-detail';
import { videoPlayerModule } from '../../../../components/videoPlayer/videoPlayer.module';

@NgModule({
  declarations: [
    checkFindDetailPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ionicGalleryModal.GalleryModalModule,
    IonicModule,
    videoPlayerModule,
    IonicPageModule.forChild(checkFindDetailPage),
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    },
  ],
})
export class checkFindDetailModule {}
