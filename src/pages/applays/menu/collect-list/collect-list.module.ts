import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { collectListPage } from './collect-list';
import { videoPlayerModule } from '../../../../components/videoPlayer/videoPlayer.module';

@NgModule({
  declarations: [
    collectListPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    videoPlayerModule,
    IonicPageModule.forChild(collectListPage),
  ],
})
export class collectListModule {}
