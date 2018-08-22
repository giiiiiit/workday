import { NgModule } from '@angular/core';
import  {IonicModule  }  from  "ionic-angular";


import { echartPieComponent } from './echart-pie';

@NgModule({
  declarations: [echartPieComponent],
  imports: [
    IonicModule
  ],
  exports: [echartPieComponent]
})
export class EchartPieModule {}
