import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "ionic-angular";
import { TreeModule } from 'angular-tree-component';
import { TreeDataComponent } from './tree-data';
import { treeTempalteModule} from './tree-tempalte/tree-template.module'


@NgModule({
  declarations: [TreeDataComponent],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    treeTempalteModule,
    TreeModule.forRoot()],
    
  exports: [
    TreeDataComponent
  ]
})
export class treeDataModule { }
