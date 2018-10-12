import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskDetailPage } from './task-detail';
import { SideMenuSelectModule } from '../../../../components/side-menu-select/side-menu-select.module'

@NgModule({
  declarations: [
    TaskDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskDetailPage),
    SideMenuSelectModule
  ],
})
export class TaskDetailPageModule {}
