import { NgModule } from '@angular/core';
import  {  IonicModule  }  from  "ionic-angular";
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { imgListViewerComponent } from './imgListViewer';
@NgModule({
  declarations: [imgListViewerComponent],
  imports: [IonicModule, ionicGalleryModal.GalleryModalModule],
  exports: [imgListViewerComponent],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    },
  ],
})
export class imgListViewerModule {}
