import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "ionic-angular";

import { treeTemplateComponent} from './tree-tempalte'


@NgModule({
  declarations: [treeTemplateComponent],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule
  ],
    
  exports: [
    treeTemplateComponent
  ]
})
export class treeTempalteModule { }
