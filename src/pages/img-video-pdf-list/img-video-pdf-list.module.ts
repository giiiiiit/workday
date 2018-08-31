import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { imgVideoPdfListPage } from './img-video-pdf-list';
import { videoPlayerModule } from '../../components/videoPlayer/videoPlayer.module';

@NgModule({
  declarations: [
    imgVideoPdfListPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    videoPlayerModule,
    IonicPageModule.forChild(imgVideoPdfListPage),
  ],
})
export class imgPanelListModule {}
