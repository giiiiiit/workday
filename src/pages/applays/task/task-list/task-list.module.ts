import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { taskListPage } from './task-list';
import { videoPlayerModule } from '../../../../components/videoPlayer/videoPlayer.module';

@NgModule({
  declarations: [
    taskListPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    videoPlayerModule,
    IonicPageModule.forChild(taskListPage),
  ],
})
export class taskListModule {}
