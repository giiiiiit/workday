import { NgModule } from '@angular/core';
import  {IonicModule  }  from  "ionic-angular";


import { echartComponent } from './echart';

@NgModule({
  declarations: [echartComponent],
  imports: [
    IonicModule
  ],
  exports: [echartComponent]
})
export class EchartModule {}
