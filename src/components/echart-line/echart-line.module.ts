import { NgModule } from '@angular/core';
import  {IonicModule }  from  "ionic-angular";


import { echartLineComponent } from './echart-line';

@NgModule({
  declarations: [echartLineComponent],
  imports: [
    IonicModule
  ],
  exports: [echartLineComponent]
})
export class EchartLineModule {}
