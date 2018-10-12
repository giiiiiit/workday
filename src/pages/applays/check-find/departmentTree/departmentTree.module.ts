import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { departmentTreePage } from './departmentTree';
import { treeDataModule } from '../../../../components/tree-data/tree-data.module';


@NgModule({
  declarations: [
    departmentTreePage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    treeDataModule,
    IonicPageModule.forChild(departmentTreePage),
    
  ],
})
export class departmentTreeModule {}
