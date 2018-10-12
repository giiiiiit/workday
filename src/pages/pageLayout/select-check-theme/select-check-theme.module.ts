import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { selectCheckThemePage } from './select-check-theme';
import { videoPlayerModule } from '../../../components/videoPlayer/videoPlayer.module';

@NgModule({
  declarations: [
    selectCheckThemePage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    videoPlayerModule,
    IonicPageModule.forChild(selectCheckThemePage),
  ],
})
export class selectCheckThemeModule {}
