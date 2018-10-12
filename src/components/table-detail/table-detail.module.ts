import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule }  from  "ionic-angular";


import { tableDetailComponent } from './table-detail';

@NgModule({
  declarations: [tableDetailComponent],
  imports: [
    IonicModule,
    IonicPageModule.forChild(tableDetailComponent),
    
  ]
})
export class tableDetailModule {}
