import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskContentPage } from './task-content';

@NgModule({
  declarations: [
    TaskContentPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskContentPage),
  ],
})
export class TaskContentPageModule {}
